import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { APPLICATIONS_WEBHOOK_URL, INTERNAL_NOTIFICATION_EMAIL } from "@/lib/constants";

export const applicationSchema = z.object({
  // Personal & Contact Info
  firstName: z.string().trim().min(1, "First name is required").max(100),
  middleInitial: z.string().trim().max(10).optional().or(z.literal("")),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  mothersMaidenName: z
    .string()
    .trim()
    .min(1, "Mother's maiden name is required for identity verification")
    .max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(40),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  residentialAddress: z
    .string()
    .trim()
    .min(5, "Please enter your full residential address")
    .max(500),
  currentTimeZone: z.string().min(1, "Current time zone is required"),
  primaryRemoteLocationType: z.string().min(1, "Remote work location type is required"),
  citizenshipResidence: z.string().min(1, "Country of citizenship / legal residence is required"),

  // Remote Work Readiness & Technical Infrastructure
  internetReliabilitySpeed: z
    .string()
    .min(1, "Internet connection reliability & speed is required"),
  computerSuitable: z.string().min(1, "Computer/laptop suitability response is required"),
  comfortableDistributed: z.string().min(1, "Distributed team comfort response is required"),
  willingBackgroundCheck: z.string().min(1, "Background check agreement is required"),
  usHoursOverlap: z.string().min(1, "Core overlapping hours response is required"),

  // Legal Identification & Document Numbers
  ssn: z.string().trim().min(4, "US Social Security Number is required").max(30),
  governmentIdNumber: z.string().trim().min(2, "Government ID number is required").max(50),
  idIssuingAuthority: z.string().trim().min(2, "ID issuing authority / state is required").max(100),
  idExpirationDate: z.string().min(1, "ID expiration date is required"),
  itinEin: z.string().trim().max(50).optional().or(z.literal("")),

  // Document File Uploads (Base64 encoded for Google Drive)
  ssnCardFileName: z.string().min(1, "US SSN Card upload is required"),
  ssnCardMimeType: z.string().min(1, "SSN Card file type is required"),
  ssnCardBase64: z.string().min(1, "SSN Card file content is required"),

  idCardFileName: z.string().min(1, "Government ID / Driver's License upload is required"),
  idCardMimeType: z.string().min(1, "Government ID file type is required"),
  idCardBase64: z.string().min(1, "Government ID file content is required"),

  resumeFileName: z.string().min(1, "Resume / CV upload is required"),
  resumeMimeType: z.string().min(1, "Resume file type is required"),
  resumeBase64: z.string().min(1, "Resume file content is required"),

  // Position, Experience & Compensation
  employmentType: z.string().min(1, "Desired employment type is required"),
  earliestStartDate: z.string().min(1, "Earliest available start date is required"),
  desiredCompensation: z
    .string()
    .trim()
    .min(1, "Desired salary / hourly rate is required")
    .max(100),
  yearsExperience: z.string().min(1, "Years of relevant work experience is required"),
  recentEmployerTitle: z
    .string()
    .trim()
    .min(2, "Most recent employer & job title is required")
    .max(250),
  certificationsSkills: z.string().trim().max(3000).optional().or(z.literal("")),

  // Professional References
  referenceA: z.string().trim().min(5, "Professional Reference A details are required").max(500),
  referenceB: z.string().trim().min(5, "Professional Reference B details are required").max(500),

  // Attestation, Consent & Signature
  accuracyStatement: z.string().min(1, "Accuracy statement certification is required"),
  dataPrivacyConsent: z.string().min(1, "Data privacy consent is required"),
  digitalSignature: z
    .string()
    .trim()
    .min(2, "Digital signature (full legal name) is required")
    .max(150),
  applicationDate: z.string().min(1, "Date of application is required"),

  // Voluntary EEO Disclosures
  genderIdentity: z.string().optional().or(z.literal("")),
  raceEthnicity: z.string().optional().or(z.literal("")),
  veteranStatus: z.string().optional().or(z.literal("")),
  disabilityStatus: z.string().optional().or(z.literal("")),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const submitApplication = createServerFn({ method: "POST" })
  .validator((input: unknown) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const webhookUrl =
      process.env["APPLICATIONS_WEBHOOK_URL"] ||
      process.env["VITE_APPLICATIONS_WEBHOOK_URL"] ||
      APPLICATIONS_WEBHOOK_URL;

    let webhookSuccess = false;
    let driveFolderUrl = "";
    let fileUrls: { ssnCardUrl?: string; idCardUrl?: string; resumeUrl?: string } = {};

    // 1. Forward directly to Google Apps Script (which writes to Google Drive & Google Sheets)
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const resJson = (await response.json().catch(() => ({}))) as {
            status?: string;
            folderUrl?: string;
            files?: { ssnCardUrl?: string; idCardUrl?: string; resumeUrl?: string };
            fileUrl?: string;
          };
          webhookSuccess = resJson.status === "success";
          driveFolderUrl = resJson.folderUrl || "";
          fileUrls = resJson.files || { resumeUrl: resJson.fileUrl };
        } else {
          console.error("Google Apps Script webhook returned non-OK", response.status);
        }
      } catch (err) {
        console.error("Failed to forward application to Google Apps Script webhook", err);
      }
    } else {
      console.warn(
        "APPLICATIONS_WEBHOOK_URL is not configured yet. Application data processed in preview mode.",
      );
    }

    // 2. Dispatch notification email if RESEND_API_KEY is configured
    const resendKey = process.env["RESEND_API_KEY"];
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env["INQUIRY_FROM_EMAIL"] ?? "Fredacorpal Talent <admin@fredacorpal.world>",
            to: [process.env["INTERNAL_NOTIFICATION_EMAIL"] || INTERNAL_NOTIFICATION_EMAIL],
            reply_to: data.email,
            subject: `New Application: ${data.firstName} ${data.lastName} (${data.employmentType})`,
            text: [
              `Applicant: ${data.firstName} ${data.middleInitial ? data.middleInitial + " " : ""}${data.lastName}`,
              `Email: ${data.email}`,
              `Phone: ${data.phone}`,
              `Desired Employment: ${data.employmentType}`,
              `Earliest Start Date: ${data.earliestStartDate}`,
              `Desired Compensation: ${data.desiredCompensation}`,
              `Experience: ${data.yearsExperience}`,
              `Recent Employer & Title: ${data.recentEmployerTitle}`,
              `Time Zone: ${data.currentTimeZone}`,
              `Location Type: ${data.primaryRemoteLocationType}`,
              `Citizenship / Residence: ${data.citizenshipResidence}`,
              "",
              "--- Document Links (Google Drive) ---",
              driveFolderUrl ? `Applicant Folder: ${driveFolderUrl}` : "",
              fileUrls.resumeUrl ? `Resume: ${fileUrls.resumeUrl}` : "",
              fileUrls.idCardUrl ? `Gov ID: ${fileUrls.idCardUrl}` : "",
              fileUrls.ssnCardUrl ? `SSN Card: ${fileUrls.ssnCardUrl}` : "",
              "",
              "--- Digital Signature ---",
              `Signed By: ${data.digitalSignature} on ${data.applicationDate}`,
            ]
              .filter(Boolean)
              .join("\n"),
          }),
        });
      } catch (mailError) {
        console.error("Application email notification failed", mailError);
      }
    }

    return {
      ok: true as const,
      webhookConfigured: Boolean(webhookUrl),
      webhookSuccess,
      driveFolderUrl,
      fileUrls,
    };
  });
