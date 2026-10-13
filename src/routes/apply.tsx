import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Eye,
  EyeOff,
  FileCheck2,
  FileText,
  FileUp,
  Loader2,
  Lock,
  Send,
  ShieldCheck,
  Trash2,
  UploadCloud,
  UserCheck,
} from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ButtonLink } from "@/components/Button";
import { PageHero, Section, SectionHeader } from "@/components/Primitives";
import { submitApplication } from "@/lib/application.functions";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/apply")({
  head: () =>
    seoHead({
      title: "Recruitment Application | Fredacorpal™ Integrated Services",
      description:
        "Submit your official recruitment and onboarding application directly. Connect your credentials, remote readiness, and identity verification with Fredacorpal™.",
      path: "/apply",
    }),
  component: Apply,
});

// Dropdown options
const timeZoneOptions = [
  "Eastern Time (EST / EDT, UTC-5)",
  "Central Time (CST / CDT, UTC-6)",
  "Mountain Time (MST / MDT, UTC-7)",
  "Pacific Time (PST / PDT, UTC-8)",
  "Alaska Time (AKST / AKDT, UTC-9)",
  "Hawaii-Aleutian Time (HST, UTC-10)",
  "Atlantic Time (AST, UTC-4)",
  "Other / International Time Zone",
];

const remoteLocationOptions = [
  "Dedicated Home Office (Private & Quiet)",
  "Shared Home Workspace",
  "Co-working Space / Private Desk",
  "Other Dedicated Workspace",
];

const internetSpeedOptions = [
  "High-Speed Fiber / Cable (100+ Mbps) — Highly Reliable",
  "Broadband Cable / Fiber (50 – 100 Mbps) — Highly Reliable",
  "Standard Broadband (25 – 50 Mbps) — Occasional Drops",
  "Satellite / Fixed Wireless",
  "Cellular 4G/5G / Mobile Hotspot",
  "Other",
];

const citizenshipOptions = [
  "United States (Citizen)",
  "United States (Permanent Resident / Green Card)",
  "Canada",
  "United Kingdom",
  "Other Country / Legal Jurisdiction",
];

const employmentTypeOptions = [
  "Full-Time (W-2 / Direct Hire)",
  "Part-Time (W-2 / Direct Hire)",
  "Independent Contractor (1099)",
  "Temporary / Project-Based",
];

const experienceOptions = [
  "Entry Level (0 – 1 year)",
  "1 – 2 years",
  "3 – 5 years",
  "5 – 8 years",
  "8+ years (Senior / Principal / Lead)",
];

const genderOptions = [
  "Decline to state / Prefer not to say",
  "Female",
  "Male",
  "Non-binary",
  "Prefer to self-describe",
];

const raceOptions = [
  "Decline to state / Prefer not to say",
  "Hispanic or Latino",
  "White (Not Hispanic or Latino)",
  "Black or African American (Not Hispanic or Latino)",
  "Asian (Not Hispanic or Latino)",
  "American Indian or Alaska Native (Not Hispanic or Latino)",
  "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
  "Two or More Races (Not Hispanic or Latino)",
];

const veteranOptions = [
  "Decline to state / Prefer not to say",
  "I am not a protected veteran",
  "I identify as one or more classifications of protected veteran",
  "Recently separated veteran",
];

const disabilityOptions = [
  "Decline to state / Prefer not to say",
  "No, I do not have a disability",
  "Yes, I have a disability (or previously had a disability)",
];

const fieldClass =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";

interface UploadedFile {
  file: File;
  base64: string;
  mimeType: string;
  name: string;
}

const STEPS = [
  {
    id: 1,
    title: "Personal & Contact Information",
    shortTitle: "Personal & Contact",
    icon: UserCheck,
  },
  {
    id: 2,
    title: "Remote Work Readiness & Technical Setup",
    shortTitle: "Remote Readiness",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Position, Experience & References",
    shortTitle: "Position & Experience",
    icon: FileText,
  },
  {
    id: 4,
    title: "Legal Identification & Document Verification",
    shortTitle: "Legal ID & Verification",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Attestation, Signature & EEO Disclosures",
    shortTitle: "Attestation & EEO",
    icon: FileCheck2,
  },
];

function Apply() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [showSsn, setShowSsn] = useState<boolean>(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    // Step 1: Personal & Contact Info
    firstName: "",
    middleInitial: "",
    lastName: "",
    mothersMaidenName: "",
    phone: "",
    email: "",
    residentialAddress: "",
    currentTimeZone: "",
    primaryRemoteLocationType: "",
    citizenshipResidence: "",

    // Step 2: Remote Work Readiness
    internetReliabilitySpeed: "",
    computerSuitable: "Yes - Dedicated modern computer/laptop meeting high security standards",
    comfortableDistributed:
      "Yes - Fully comfortable with Slack, Zoom, and asynchronous documentation",
    willingBackgroundCheck: "Yes - I agree to standard background check and identity verification",
    usHoursOverlap:
      "Yes - Able to maintain full core overlapping hours (e.g. 9 AM – 5 PM EST / CST)",

    // Step 3: Legal Identification
    ssn: "",
    governmentIdNumber: "",
    idIssuingAuthority: "",
    idExpirationDate: "",
    itinEin: "",

    // Step 4: Position, Experience & References
    employmentType: "",
    earliestStartDate: "",
    desiredCompensation: "",
    yearsExperience: "",
    recentEmployerTitle: "",
    certificationsSkills: "",
    referenceA: "",
    referenceB: "",

    // Step 5: Attestation & Signature
    accuracyStatement: false,
    dataPrivacyConsent: false,
    digitalSignature: "",
    applicationDate: new Date().toISOString().split("T")[0],
    genderIdentity: "Decline to state / Prefer not to say",
    raceEthnicity: "Decline to state / Prefer not to say",
    veteranStatus: "Decline to state / Prefer not to say",
    disabilityStatus: "Decline to state / Prefer not to say",
  });

  // Uploaded Files State
  const [ssnCardFile, setSsnCardFile] = useState<UploadedFile | null>(null);
  const [idCardFile, setIdCardFile] = useState<UploadedFile | null>(null);
  const [resumeFile, setResumeFile] = useState<UploadedFile | null>(null);
  const [fileErrors, setFileErrors] = useState<{
    ssnCard?: string;
    idCard?: string;
    resume?: string;
  }>({});

  const sendApplication = useServerFn(submitApplication);

  // Restore non-sensitive data from sessionStorage on load
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("fredacorpal_application_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          // never restore SSN from sessionStorage
          ssn: "",
          mothersMaidenName: "",
        }));
      }
    } catch {
      // Ignore sessionStorage issues
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // Auto-save non-sensitive values
      try {
        const toSave = { ...updated, ssn: "", mothersMaidenName: "" };
        sessionStorage.setItem("fredacorpal_application_draft", JSON.stringify(toSave));
      } catch {
        // Ignore
      }

      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
    }
  };

  const handleFileUpload = (
    fileType: "ssnCard" | "idCard" | "resume",
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileErrors((prev) => ({ ...prev, [fileType]: undefined }));

    // File size limit: 10MB
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileErrors((prev) => ({
        ...prev,
        [fileType]: "File exceeds 10MB limit. Please upload a smaller file.",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1] || "";
      const uploaded: UploadedFile = {
        file,
        base64,
        mimeType: file.type || "application/octet-stream",
        name: file.name,
      };

      if (fileType === "ssnCard") setSsnCardFile(uploaded);
      if (fileType === "idCard") setIdCardFile(uploaded);
      if (fileType === "resume") setResumeFile(uploaded);
    };

    reader.onerror = () => {
      setFileErrors((prev) => ({
        ...prev,
        [fileType]: "Unable to process file. Please try again.",
      }));
    };

    reader.readAsDataURL(file);
  };

  const removeUploadedFile = (fileType: "ssnCard" | "idCard" | "resume") => {
    if (fileType === "ssnCard") setSsnCardFile(null);
    if (fileType === "idCard") setIdCardFile(null);
    if (fileType === "resume") setResumeFile(null);
  };

  // Helper to get completion status and missing fields for any step
  const getStepStatus = (stepId: number) => {
    const missing: string[] = [];

    if (stepId === 1) {
      if (!formData.firstName.trim()) missing.push("First Name");
      if (!formData.lastName.trim()) missing.push("Last Name");
      if (!formData.mothersMaidenName.trim()) missing.push("Mother's Maiden Name");
      if (!formData.phone.trim() || formData.phone.length < 7) missing.push("Phone Number");
      if (!formData.email.trim() || !formData.email.includes("@")) missing.push("Email Address");
      if (!formData.residentialAddress.trim() || formData.residentialAddress.length < 5)
        missing.push("Residential Address");
      if (!formData.currentTimeZone) missing.push("Current Time Zone");
      if (!formData.primaryRemoteLocationType) missing.push("Remote Work Location Type");
    } else if (stepId === 2) {
      if (!formData.internetReliabilitySpeed) missing.push("Internet Speed & Reliability");
      if (!formData.computerSuitable) missing.push("Computer Suitability");
      if (!formData.comfortableDistributed) missing.push("Distributed Team Comfort");
      if (!formData.willingBackgroundCheck) missing.push("Background Check Agreement");
    } else if (stepId === 3) {
      if (!formData.employmentType) missing.push("Employment Type");
      if (!formData.earliestStartDate) missing.push("Earliest Start Date");
      if (!formData.desiredCompensation.trim()) missing.push("Desired Compensation");
      if (!formData.usHoursOverlap) missing.push("US Core Hours Overlap");
      if (!formData.yearsExperience) missing.push("Years of Experience");
      if (!formData.recentEmployerTitle.trim()) missing.push("Recent Employer & Job Title");
      if (!resumeFile) missing.push("Resume / CV Upload");
      if (!formData.referenceA.trim() || formData.referenceA.length < 5)
        missing.push("Reference A");
      if (!formData.referenceB.trim() || formData.referenceB.length < 5)
        missing.push("Reference B");
    } else if (stepId === 4) {
      if (!formData.citizenshipResidence) missing.push("Country of Citizenship / Residence");
      if (!formData.ssn.trim() || formData.ssn.length < 4) missing.push("US SSN");
      if (!formData.governmentIdNumber.trim()) missing.push("Government ID Number");
      if (!formData.idIssuingAuthority.trim()) missing.push("ID Issuing Authority");
      if (!formData.idExpirationDate) missing.push("ID Expiration Date");
      if (!ssnCardFile) missing.push("US SSN Card Upload");
      if (!idCardFile) missing.push("Government ID / Driver's License Upload");
    } else if (stepId === 5) {
      if (!formData.accuracyStatement) missing.push("Accuracy Statement Certification");
      if (!formData.dataPrivacyConsent) missing.push("Data Privacy Consent");
      if (!formData.digitalSignature.trim() || formData.digitalSignature.length < 2)
        missing.push("Digital Signature");
      if (!formData.applicationDate) missing.push("Date of Application");
    }

    return {
      isComplete: missing.length === 0,
      missing,
    };
  };

  // Comprehensive validation across all 5 steps required before submission
  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    const newFileErrors: { ssnCard?: string; idCard?: string; resume?: string } = {};
    const missingByStep: Record<number, string[]> = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    let firstInvalidStep: number | null = null;

    // Step 1
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      missingByStep[1].push("First Name");
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      missingByStep[1].push("Last Name");
    }
    if (!formData.mothersMaidenName.trim()) {
      newErrors.mothersMaidenName = "Mother's maiden name is required for verification";
      missingByStep[1].push("Mother's Maiden Name");
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = "Valid contact phone number is required";
      missingByStep[1].push("Phone Number");
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email address is required";
      missingByStep[1].push("Email Address");
    }
    if (!formData.residentialAddress.trim() || formData.residentialAddress.length < 5) {
      newErrors.residentialAddress = "Full residential address is required";
      missingByStep[1].push("Residential Address");
    }
    if (!formData.currentTimeZone) {
      newErrors.currentTimeZone = "Please select your time zone";
      missingByStep[1].push("Current Time Zone");
    }
    if (!formData.primaryRemoteLocationType) {
      newErrors.primaryRemoteLocationType = "Please select your remote workspace setting";
      missingByStep[1].push("Remote Workspace Setting");
    }

    // Step 2
    if (!formData.internetReliabilitySpeed) {
      newErrors.internetReliabilitySpeed = "Please specify internet speed & reliability";
      missingByStep[2].push("Internet Speed");
    }
    if (!formData.computerSuitable) {
      newErrors.computerSuitable = "Please confirm computer suitability";
      missingByStep[2].push("Computer Suitability");
    }
    if (!formData.comfortableDistributed) {
      newErrors.comfortableDistributed = "Please specify comfort with distributed team channels";
      missingByStep[2].push("Distributed Team Comfort");
    }
    if (!formData.willingBackgroundCheck) {
      newErrors.willingBackgroundCheck = "Background check consent is required";
      missingByStep[2].push("Background Check Agreement");
    }

    // Step 3: Position, Experience & References
    if (!formData.employmentType) {
      newErrors.employmentType = "Please select desired employment type";
      missingByStep[3].push("Desired Employment Type");
    }
    if (!formData.earliestStartDate) {
      newErrors.earliestStartDate = "Please provide earliest available start date";
      missingByStep[3].push("Earliest Start Date");
    }
    if (!formData.desiredCompensation.trim()) {
      newErrors.desiredCompensation = "Desired salary or hourly rate is required";
      missingByStep[3].push("Desired Compensation");
    }
    if (!formData.usHoursOverlap) {
      newErrors.usHoursOverlap = "Please specify ability to overlap with US hours";
      missingByStep[3].push("US Hours Overlap");
    }
    if (!formData.yearsExperience) {
      newErrors.yearsExperience = "Please select years of relevant work experience";
      missingByStep[3].push("Years of Experience");
    }
    if (!formData.recentEmployerTitle.trim()) {
      newErrors.recentEmployerTitle = "Most recent employer & job title is required";
      missingByStep[3].push("Recent Employer & Job Title");
    }
    if (!resumeFile) {
      newFileErrors.resume = "Please attach your resume/CV (PDF, DOC, or DOCX)";
      missingByStep[3].push("Resume / CV Upload");
    }
    if (!formData.referenceA.trim() || formData.referenceA.length < 5) {
      newErrors.referenceA = "Reference A details required";
      missingByStep[3].push("Reference A Details");
    }
    if (!formData.referenceB.trim() || formData.referenceB.length < 5) {
      newErrors.referenceB = "Reference B details required";
      missingByStep[3].push("Reference B Details");
    }

    // Step 4: Legal Identification & Document Verification
    if (!formData.citizenshipResidence) {
      newErrors.citizenshipResidence = "Citizenship / legal residence status is required";
      missingByStep[4].push("Country of Citizenship / Residence");
    }
    if (!formData.ssn.trim() || formData.ssn.length < 4) {
      newErrors.ssn = "US Social Security Number is required";
      missingByStep[4].push("Social Security Number (SSN)");
    }
    if (!formData.governmentIdNumber.trim()) {
      newErrors.governmentIdNumber = "Government ID / Driver's License number is required";
      missingByStep[4].push("Government ID Number");
    }
    if (!formData.idIssuingAuthority.trim()) {
      newErrors.idIssuingAuthority = "ID issuing authority/state is required";
      missingByStep[4].push("ID Issuing Authority");
    }
    if (!formData.idExpirationDate) {
      newErrors.idExpirationDate = "ID expiration date is required";
      missingByStep[4].push("ID Expiration Date");
    }
    if (!ssnCardFile) {
      newFileErrors.ssnCard = "Please upload an image or PDF of your US SSN Card";
      missingByStep[4].push("US SSN Card Upload");
    }
    if (!idCardFile) {
      newFileErrors.idCard =
        "Please upload an image or PDF of your Government ID / Driver's License";
      missingByStep[4].push("Government ID / Driver's License Upload");
    }

    // Step 5
    if (!formData.accuracyStatement) {
      newErrors.accuracyStatement = "You must certify the accuracy of your application";
      missingByStep[5].push("Accuracy Statement");
    }
    if (!formData.dataPrivacyConsent) {
      newErrors.dataPrivacyConsent = "You must consent to data privacy and verification";
      missingByStep[5].push("Data Privacy Consent");
    }
    if (!formData.digitalSignature.trim() || formData.digitalSignature.length < 2) {
      newErrors.digitalSignature = "Digital signature (Full Legal Name) is required";
      missingByStep[5].push("Digital Signature");
    }
    if (!formData.applicationDate) {
      newErrors.applicationDate = "Application date is required";
      missingByStep[5].push("Date of Application");
    }

    for (let i = 1; i <= 5; i++) {
      if (missingByStep[i].length > 0) {
        firstInvalidStep = i;
        break;
      }
    }

    return {
      isValid: firstInvalidStep === null,
      errors: newErrors,
      fileErrors: newFileErrors,
      firstInvalidStep,
      missingByStep,
    };
  };

  // Unrestricted navigation: users can freely view any step
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Strict mandatory validation: all required fields across all 5 steps must be filled
    const {
      isValid,
      errors: valErrors,
      fileErrors: valFileErrors,
      firstInvalidStep,
      missingByStep,
    } = validateAll();

    if (!isValid && firstInvalidStep !== null) {
      setErrors(valErrors);
      setFileErrors(valFileErrors);
      const missingList = missingByStep[firstInvalidStep].slice(0, 3).join(", ");
      const extraCount = missingByStep[firstInvalidStep].length - 3;
      setServerError(
        `Submission Blocked: All required fields and documents must be completed. Redirecting to Step ${firstInvalidStep} (${STEPS[firstInvalidStep - 1].title}) for: ${missingList}${extraCount > 0 ? ` and ${extraCount} more` : ""}.`,
      );
      setCurrentStep(firstInvalidStep);
      window.scrollTo({ top: 350, behavior: "smooth" });
      return;
    }

    setStatus("sending");
    setServerError(null);

    try {
      await sendApplication({
        data: {
          firstName: formData.firstName.trim(),
          middleInitial: formData.middleInitial.trim() || undefined,
          lastName: formData.lastName.trim(),
          mothersMaidenName: formData.mothersMaidenName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          residentialAddress: formData.residentialAddress.trim(),
          currentTimeZone: formData.currentTimeZone,
          primaryRemoteLocationType: formData.primaryRemoteLocationType,
          citizenshipResidence: formData.citizenshipResidence,

          internetReliabilitySpeed: formData.internetReliabilitySpeed,
          computerSuitable: formData.computerSuitable,
          comfortableDistributed: formData.comfortableDistributed,
          willingBackgroundCheck: formData.willingBackgroundCheck,
          usHoursOverlap: formData.usHoursOverlap,

          ssn: formData.ssn.trim(),
          governmentIdNumber: formData.governmentIdNumber.trim(),
          idIssuingAuthority: formData.idIssuingAuthority.trim(),
          idExpirationDate: formData.idExpirationDate,
          itinEin: formData.itinEin.trim() || undefined,

          ssnCardFileName: ssnCardFile!.name,
          ssnCardMimeType: ssnCardFile!.mimeType,
          ssnCardBase64: ssnCardFile!.base64,

          idCardFileName: idCardFile!.name,
          idCardMimeType: idCardFile!.mimeType,
          idCardBase64: idCardFile!.base64,

          resumeFileName: resumeFile!.name,
          resumeMimeType: resumeFile!.mimeType,
          resumeBase64: resumeFile!.base64,

          employmentType: formData.employmentType,
          earliestStartDate: formData.earliestStartDate,
          desiredCompensation: formData.desiredCompensation.trim(),
          yearsExperience: formData.yearsExperience,
          recentEmployerTitle: formData.recentEmployerTitle.trim(),
          certificationsSkills: formData.certificationsSkills.trim() || undefined,

          referenceA: formData.referenceA.trim(),
          referenceB: formData.referenceB.trim(),

          accuracyStatement: formData.accuracyStatement ? "Confirmed & Certified" : "",
          dataPrivacyConsent: formData.dataPrivacyConsent ? "Consented & Authorized" : "",
          digitalSignature: formData.digitalSignature.trim(),
          applicationDate: formData.applicationDate,

          genderIdentity: formData.genderIdentity || undefined,
          raceEthnicity: formData.raceEthnicity || undefined,
          veteranStatus: formData.veteranStatus || undefined,
          disabilityStatus: formData.disabilityStatus || undefined,
        },
      });

      setStatus("success");
      sessionStorage.removeItem("fredacorpal_application_draft");
      window.scrollTo({ top: 300, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setServerError(
        err instanceof Error
          ? err.message
          : "We encountered an issue submitting your application. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  const renderFileUploader = (
    label: string,
    fileType: "ssnCard" | "idCard" | "resume",
    acceptedTypes: string,
    currentFile: UploadedFile | null,
    errorMessage?: string,
  ) => {
    return (
      <div className="mt-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label} *
        </label>
        {!currentFile ? (
          <label className="group relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface px-6 py-6 transition-all hover:border-gold hover:bg-gold/5">
            <UploadCloud className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-gold" />
            <p className="mt-2 text-xs font-semibold text-foreground">
              Click to select or drag & drop file
            </p>
            <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
              Max 10MB ({acceptedTypes.replace(/\./g, "").toUpperCase()})
            </p>
            <input
              type="file"
              accept={acceptedTypes}
              className="sr-only"
              onChange={(e) => handleFileUpload(fileType, e)}
            />
          </label>
        ) : (
          <div className="mt-2 flex items-center justify-between rounded-lg border border-gold/40 bg-gold/5 p-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-gold/50 bg-gold/10 text-gold">
                <FileUp className="h-4 w-4" />
              </span>
              <div className="min-w-0 truncate">
                <p className="truncate text-xs font-semibold text-foreground">{currentFile.name}</p>
                <p className="text-[0.7rem] text-muted-foreground">
                  {(currentFile.file.size / 1024).toFixed(1)} KB • Ready for Google Drive
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeUploadedFile(fileType)}
              className="ml-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              aria-label={`Remove ${label}`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
        {errorMessage && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      <PageHero
        eyebrow="Recruitment & Onboarding"
        title="Direct Application Form"
        description="Official Fredacorpal™ Integrated Services recruitment application. Submit your candidate credentials, verify your identity, and connect with our talent acquisition team."
        breadcrumbs={[{ label: "Careers", to: "/careers" }, { label: "Apply" }]}
      >
        <ButtonLink to="/careers" variant="light" size="lg">
          View Open Positions
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Candidate Portal Intake"
            title="Candidate Profile & Verification"
            description="All information submitted is securely encrypted and archived directly into our Google Drive and recruitment database for background and employment screening."
          />

          {status === "success" ? (
            <div className="mt-10 rounded-xl border border-gold/40 bg-card p-8 text-center shadow-elevate sm:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                Application Received Successfully
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Thank you, <strong className="text-foreground">{formData.firstName}</strong>. Your
                complete 40-point candidate profile, identification documents, and resume have been
                securely archived into our Google Drive talent repository and candidate roster.
              </p>

              <div className="mx-auto mt-8 max-w-md rounded-lg border border-border bg-surface p-4 text-left text-xs text-muted-foreground">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span>Submission Summary</span>
                </div>
                <div className="mt-2 space-y-1">
                  <div>
                    <span className="font-medium text-foreground">Applicant:</span>{" "}
                    {formData.firstName} {formData.lastName}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Role / Type:</span>{" "}
                    {formData.employmentType}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Target Start:</span>{" "}
                    {formData.earliestStartDate}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Verified Documents:</span> SSN
                    Card, Government ID, and Resume/CV
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink to="/careers" variant="outline">
                  Browse Open Roles
                </ButtonLink>
                <ButtonLink to="/">Return to Homepage</ButtonLink>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setCurrentStep(1);
                  }}
                  className="rounded-md px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-gold"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-border bg-card shadow-elevate">
              {/* Security Header Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface/80 px-6 py-3.5 sm:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Lock className="h-3.5 w-3.5 text-gold" />
                  <span>256-Bit SSL Encrypted Intake • Secure Google Drive Repository</span>
                </div>
                <div className="text-xs font-semibold text-gold">Step {currentStep} of 5</div>
              </div>

              {/* Stepper Tabs Bar */}
              <div className="overflow-x-auto border-b border-border px-4 py-3 sm:px-8">
                <div className="flex min-w-[580px] justify-between gap-2">
                  {STEPS.map((s) => {
                    const isActive = currentStep === s.id;
                    const { isComplete } = getStepStatus(s.id);

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setCurrentStep(s.id);
                          window.scrollTo({ top: 350, behavior: "smooth" });
                        }}
                        className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-gold/10 text-gold ring-1 ring-gold/40"
                            : isComplete
                              ? "text-foreground hover:bg-surface"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-bold ${
                            isActive
                              ? "bg-gold text-navy"
                              : isComplete
                                ? "bg-emerald-500/20 text-emerald-500"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {isComplete ? <CheckCircle2 className="h-4 w-4" /> : s.id}
                        </span>
                        <span>{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={onSubmit} className="p-6 sm:p-10 lg:p-12">
                {serverError && (
                  <div className="mb-6 flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Submission Failed</p>
                      <p className="mt-0.5 text-xs">{serverError}</p>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* STEP 1: Personal & Contact Details */}
                {/* ========================================================================= */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        1. Personal & Contact Information
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Please provide your full legal name, permanent contact details, and current
                        location.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Legal First Name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="middleInitial"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Middle Initial
                        </label>
                        <input
                          id="middleInitial"
                          name="middleInitial"
                          maxLength={5}
                          value={formData.middleInitial}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="e.g. M."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Legal Last Name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="mothersMaidenName"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Mother's Maiden Name *
                      </label>
                      <input
                        id="mothersMaidenName"
                        name="mothersMaidenName"
                        value={formData.mothersMaidenName}
                        onChange={handleInputChange}
                        className={fieldClass}
                        placeholder="Maiden Surname"
                      />
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">
                        Used strictly as an identity authentication credential.
                      </p>
                      {errors.mothersMaidenName && (
                        <p className="mt-1 text-xs text-destructive">{errors.mothersMaidenName}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Phone Number (Cell / WhatsApp) *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="name@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="residentialAddress"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Residential Address (Street, Apt/Suite, City, State/Province, ZIP) *
                      </label>
                      <textarea
                        id="residentialAddress"
                        name="residentialAddress"
                        rows={2}
                        value={formData.residentialAddress}
                        onChange={handleInputChange}
                        className={fieldClass}
                        placeholder="123 Example Blvd, Apt 4B, Austin, TX 78701"
                      />
                      {errors.residentialAddress && (
                        <p className="mt-1 text-xs text-destructive">{errors.residentialAddress}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="currentTimeZone"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Current Time Zone *
                        </label>
                        <select
                          id="currentTimeZone"
                          name="currentTimeZone"
                          value={formData.currentTimeZone}
                          onChange={handleInputChange}
                          className={fieldClass}
                        >
                          <option value="" disabled>
                            Select Primary Time Zone
                          </option>
                          {timeZoneOptions.map((tz) => (
                            <option key={tz} value={tz}>
                              {tz}
                            </option>
                          ))}
                        </select>
                        {errors.currentTimeZone && (
                          <p className="mt-1 text-xs text-destructive">{errors.currentTimeZone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="primaryRemoteLocationType"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Primary Remote Work Location Type *
                        </label>
                        <select
                          id="primaryRemoteLocationType"
                          name="primaryRemoteLocationType"
                          value={formData.primaryRemoteLocationType}
                          onChange={handleInputChange}
                          className={fieldClass}
                        >
                          <option value="" disabled>
                            Select Workspace Setting
                          </option>
                          {remoteLocationOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.primaryRemoteLocationType && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.primaryRemoteLocationType}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* STEP 2: Remote Work Readiness & Technical Infrastructure */}
                {/* ========================================================================= */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        2. Remote Work Readiness & Technical Setup
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Fredacorpal™ maintains rigorous technical and security standards for all
                        remote professionals.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="internetReliabilitySpeed"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Internet Connection Reliability & Speed *
                      </label>
                      <select
                        id="internetReliabilitySpeed"
                        name="internetReliabilitySpeed"
                        value={formData.internetReliabilitySpeed}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select Connection Speed & Reliability
                        </option>
                        {internetSpeedOptions.map((speed) => (
                          <option key={speed} value={speed}>
                            {speed}
                          </option>
                        ))}
                      </select>
                      {errors.internetReliabilitySpeed && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.internetReliabilitySpeed}
                        </p>
                      )}
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-4">
                      <label
                        htmlFor="computerSuitable"
                        className="text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Is your computer/laptop suitable for secure remote work? *
                      </label>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Requires dedicated private hardware capable of running enterprise security
                        protocols and modern web platforms.
                      </p>
                      <select
                        id="computerSuitable"
                        name="computerSuitable"
                        value={formData.computerSuitable}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="Yes - Dedicated modern desktop or laptop with secure OS">
                          Yes — Dedicated modern desktop or laptop with secure OS
                        </option>
                        <option value="No - Shared or older hardware">
                          No — Shared or insufficient hardware
                        </option>
                      </select>
                      {errors.computerSuitable && (
                        <p className="mt-1 text-xs text-destructive">{errors.computerSuitable}</p>
                      )}
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-4">
                      <label
                        htmlFor="comfortableDistributed"
                        className="text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Are you comfortable operating independently across distributed team channels
                        (e.g., Slack, Zoom, Asynchronous documentation)? *
                      </label>
                      <select
                        id="comfortableDistributed"
                        name="comfortableDistributed"
                        value={formData.comfortableDistributed}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="Yes - Fully comfortable with Slack, Zoom, and asynchronous documentation">
                          Yes — Highly proficient with asynchronous documentation, Slack, Zoom, and
                          remote tooling
                        </option>
                        <option value="Comfortable with training / Quick learner">
                          Comfortable with onboarding & training / Quick learner
                        </option>
                        <option value="No">No</option>
                      </select>
                      {errors.comfortableDistributed && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.comfortableDistributed}
                        </p>
                      )}
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-4">
                      <label
                        htmlFor="willingBackgroundCheck"
                        className="text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Are you willing to undergo a standard background check and identity
                        verification prior to employment offer? *
                      </label>
                      <select
                        id="willingBackgroundCheck"
                        name="willingBackgroundCheck"
                        value={formData.willingBackgroundCheck}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="Yes - I agree to standard background check and identity verification">
                          Yes — I agree to standard background check and identity verification
                        </option>
                        <option value="No">No</option>
                      </select>
                      {errors.willingBackgroundCheck && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.willingBackgroundCheck}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* STEP 3: Position, Experience & References */}
                {/* ========================================================================= */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        3. Position, Experience & References
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Detail your career history, target compensation, professional references,
                        and curriculum vitae.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="employmentType"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Desired Employment Type *
                        </label>
                        <select
                          id="employmentType"
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleInputChange}
                          className={fieldClass}
                        >
                          <option value="" disabled>
                            Select Employment Type
                          </option>
                          {employmentTypeOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.employmentType && (
                          <p className="mt-1 text-xs text-destructive">{errors.employmentType}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="earliestStartDate"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Earliest Available Start Date *
                        </label>
                        <input
                          id="earliestStartDate"
                          name="earliestStartDate"
                          type="date"
                          value={formData.earliestStartDate}
                          onChange={handleInputChange}
                          className={fieldClass}
                        />
                        {errors.earliestStartDate && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.earliestStartDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="desiredCompensation"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Desired Salary / Hourly Rate ($ USD) *
                        </label>
                        <input
                          id="desiredCompensation"
                          name="desiredCompensation"
                          value={formData.desiredCompensation}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="e.g. $45 / hr or $85,000 / yr"
                        />
                        {errors.desiredCompensation && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.desiredCompensation}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-4">
                      <label
                        htmlFor="usHoursOverlap"
                        className="text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        Are you able to maintain core overlapping working hours with US time zones
                        (e.g., 9 AM – 5 PM EST or CST)? *
                      </label>
                      <select
                        id="usHoursOverlap"
                        name="usHoursOverlap"
                        value={formData.usHoursOverlap}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="Yes - Able to maintain full core overlapping hours (9 AM – 5 PM EST or CST)">
                          Yes — Able to maintain full core overlapping hours (9 AM – 5 PM EST / CST)
                        </option>
                        <option value="Partial overlap (4 to 6 hours daily)">
                          Partial overlap (4 to 6 hours daily overlap)
                        </option>
                        <option value="Flexible / Asynchronous only">
                          Flexible / Asynchronous work only
                        </option>
                      </select>
                      {errors.usHoursOverlap && (
                        <p className="mt-1 text-xs text-destructive">{errors.usHoursOverlap}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="yearsExperience"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Years of Relevant Work Experience *
                        </label>
                        <select
                          id="yearsExperience"
                          name="yearsExperience"
                          value={formData.yearsExperience}
                          onChange={handleInputChange}
                          className={fieldClass}
                        >
                          <option value="" disabled>
                            Select Experience Level
                          </option>
                          {experienceOptions.map((exp) => (
                            <option key={exp} value={exp}>
                              {exp}
                            </option>
                          ))}
                        </select>
                        {errors.yearsExperience && (
                          <p className="mt-1 text-xs text-destructive">{errors.yearsExperience}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="recentEmployerTitle"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Most Recent Employer & Job Title *
                        </label>
                        <input
                          id="recentEmployerTitle"
                          name="recentEmployerTitle"
                          value={formData.recentEmployerTitle}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="e.g. Acme Tech Corp — Senior Growth Specialist"
                        />
                        {errors.recentEmployerTitle && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.recentEmployerTitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="certificationsSkills"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Relevant Certifications or Technical Skills — IF ANY
                      </label>
                      <textarea
                        id="certificationsSkills"
                        name="certificationsSkills"
                        rows={2}
                        value={formData.certificationsSkills}
                        onChange={handleInputChange}
                        className={fieldClass}
                        placeholder="e.g. Google Analytics Certified, Salesforce Admin, HubSpot, AWS Solutions Architect, SEO / Semrush..."
                      />
                    </div>

                    {/* Resume Upload */}
                    {renderFileUploader(
                      "Upload Resume / CV",
                      "resume",
                      ".pdf,.doc,.docx",
                      resumeFile,
                      fileErrors.resume,
                    )}

                    {/* References */}
                    <div className="grid gap-4 sm:grid-cols-2 pt-2">
                      <div>
                        <label
                          htmlFor="referenceA"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Reference A (Name, Title, Organization, Phone, Email) *
                        </label>
                        <textarea
                          id="referenceA"
                          name="referenceA"
                          rows={2}
                          value={formData.referenceA}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Jane Doe, VP of Marketing, Apex Global, (555) 234-5678, jdoe@apex.com"
                        />
                        {errors.referenceA && (
                          <p className="mt-1 text-xs text-destructive">{errors.referenceA}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="referenceB"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Reference B (Name, Title, Organization, Phone, Email) *
                        </label>
                        <textarea
                          id="referenceB"
                          name="referenceB"
                          rows={2}
                          value={formData.referenceB}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Robert Johnson, Engineering Director, CloudTech, (555) 876-5432, rjohnson@cloudtech.io"
                        />
                        {errors.referenceB && (
                          <p className="mt-1 text-xs text-destructive">{errors.referenceB}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* STEP 4: Legal Identification & Document Verification */}
                {/* ========================================================================= */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          4. Legal Identification & Document Verification
                        </h3>
                        <ShieldCheck className="h-4 w-4 text-gold" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Required for legal identity confirmation, tax compliance, and payroll
                        readiness. All files are securely saved in your candidate Google Drive
                        repository.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="citizenshipResidence"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Country of Citizenship / Legal Residence *
                      </label>
                      <select
                        id="citizenshipResidence"
                        name="citizenshipResidence"
                        value={formData.citizenshipResidence}
                        onChange={handleInputChange}
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select Country / Status
                        </option>
                        {citizenshipOptions.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.citizenshipResidence && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.citizenshipResidence}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="ssn"
                            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            US Social Security Number (SSN) *
                          </label>
                          <button
                            type="button"
                            onClick={() => setShowSsn(!showSsn)}
                            className="inline-flex items-center gap-1 text-[0.7rem] text-gold hover:underline"
                          >
                            {showSsn ? (
                              <>
                                <EyeOff className="h-3 w-3" /> Hide
                              </>
                            ) : (
                              <>
                                <Eye className="h-3 w-3" /> Show
                              </>
                            )}
                          </button>
                        </div>
                        <input
                          id="ssn"
                          name="ssn"
                          type={showSsn ? "text" : "password"}
                          value={formData.ssn}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="XXX-XX-XXXX"
                        />
                        {errors.ssn && (
                          <p className="mt-1 text-xs text-destructive">{errors.ssn}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="itinEin"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Taxpayer ID (ITIN / EIN) — If Applicable
                        </label>
                        <input
                          id="itinEin"
                          name="itinEin"
                          value={formData.itinEin}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="XX-XXXXXXX (Optional)"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="governmentIdNumber"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          US Government ID / Document # *
                        </label>
                        <input
                          id="governmentIdNumber"
                          name="governmentIdNumber"
                          value={formData.governmentIdNumber}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Driver's Lic / State ID / Passport #"
                        />
                        {errors.governmentIdNumber && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.governmentIdNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="idIssuingAuthority"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          ID Issuing Authority / State *
                        </label>
                        <input
                          id="idIssuingAuthority"
                          name="idIssuingAuthority"
                          value={formData.idIssuingAuthority}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="e.g. California DMV, NY, US Dept of State"
                        />
                        {errors.idIssuingAuthority && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.idIssuingAuthority}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="idExpirationDate"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          ID Expiration Date *
                        </label>
                        <input
                          id="idExpirationDate"
                          name="idExpirationDate"
                          type="date"
                          value={formData.idExpirationDate}
                          onChange={handleInputChange}
                          className={fieldClass}
                        />
                        {errors.idExpirationDate && (
                          <p className="mt-1 text-xs text-destructive">{errors.idExpirationDate}</p>
                        )}
                      </div>
                    </div>

                    {/* File Uploads for SSN and ID Card */}
                    <div className="grid gap-6 sm:grid-cols-2 pt-2">
                      {renderFileUploader(
                        "US SSN Card Upload",
                        "ssnCard",
                        ".pdf,.png,.jpg,.jpeg",
                        ssnCardFile,
                        fileErrors.ssnCard,
                      )}

                      {renderFileUploader(
                        "Government ID / Driver's License",
                        "idCard",
                        ".pdf,.png,.jpg,.jpeg",
                        idCardFile,
                        fileErrors.idCard,
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* STEP 5: Attestation, Signature & EEO Disclosures */}
                {/* ========================================================================= */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        5. Attestation, Signature & EEO Disclosures
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Please review and certify your statements, provide your legal digital
                        signature, and complete voluntary demographic disclosures.
                      </p>
                    </div>

                    {/* Certifications & Consents */}
                    <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="accuracyStatement"
                          checked={formData.accuracyStatement}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 rounded border-input text-gold focus:ring-gold"
                        />
                        <span className="text-xs leading-relaxed text-foreground">
                          <strong>Accuracy Statement:</strong> I hereby certify that all information
                          provided in this application is true, accurate, and complete to the best
                          of my knowledge. I understand that any false statements or omissions may
                          lead to rejection of my application or immediate termination of
                          employment. *
                        </span>
                      </label>
                      {errors.accuracyStatement && (
                        <p className="text-xs text-destructive pl-7">{errors.accuracyStatement}</p>
                      )}

                      <div className="h-px bg-border/60" />

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="dataPrivacyConsent"
                          checked={formData.dataPrivacyConsent}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 rounded border-input text-gold focus:ring-gold"
                        />
                        <span className="text-xs leading-relaxed text-foreground">
                          <strong>Data Privacy & Background Verification Consent:</strong> I
                          authorize Fredacorpal™ Integrated Services to collect, securely store in
                          Google Drive, process, and verify my personal information, references, and
                          legal identification strictly for recruitment and pre-employment
                          background screening. *
                        </span>
                      </label>
                      {errors.dataPrivacyConsent && (
                        <p className="text-xs text-destructive pl-7">{errors.dataPrivacyConsent}</p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="digitalSignature"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Digital Signature (Full Legal Name) *
                        </label>
                        <input
                          id="digitalSignature"
                          name="digitalSignature"
                          value={formData.digitalSignature}
                          onChange={handleInputChange}
                          className={fieldClass}
                          placeholder="Type your full legal name"
                        />
                        <p className="mt-1 text-[0.7rem] text-muted-foreground">
                          Serves as a binding electronic signature under the ESIGN Act.
                        </p>
                        {errors.digitalSignature && (
                          <p className="mt-1 text-xs text-destructive">{errors.digitalSignature}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="applicationDate"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Date of Application *
                        </label>
                        <input
                          id="applicationDate"
                          name="applicationDate"
                          type="date"
                          value={formData.applicationDate}
                          onChange={handleInputChange}
                          className={fieldClass}
                        />
                        {errors.applicationDate && (
                          <p className="mt-1 text-xs text-destructive">{errors.applicationDate}</p>
                        )}
                      </div>
                    </div>

                    {/* Voluntary EEO Disclosures */}
                    <div className="pt-2">
                      <div className="rounded-lg border border-border bg-surface p-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Voluntary Equal Opportunity & Demographic Disclosures
                        </h4>
                        <p className="mt-1 text-[0.7rem] text-muted-foreground">
                          Fredacorpal™ Integrated Services is an equal opportunity employer.
                          Submission of this information is strictly voluntary and will have no
                          adverse impact on your candidacy.
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="genderIdentity"
                              className="text-xs font-semibold text-muted-foreground"
                            >
                              Gender Identity
                            </label>
                            <select
                              id="genderIdentity"
                              name="genderIdentity"
                              value={formData.genderIdentity}
                              onChange={handleInputChange}
                              className={fieldClass}
                            >
                              {genderOptions.map((g) => (
                                <option key={g} value={g}>
                                  {g}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="raceEthnicity"
                              className="text-xs font-semibold text-muted-foreground"
                            >
                              Race / Ethnic Background
                            </label>
                            <select
                              id="raceEthnicity"
                              name="raceEthnicity"
                              value={formData.raceEthnicity}
                              onChange={handleInputChange}
                              className={fieldClass}
                            >
                              {raceOptions.map((r) => (
                                <option key={r} value={r}>
                                  {r}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="veteranStatus"
                              className="text-xs font-semibold text-muted-foreground"
                            >
                              Veteran Status
                            </label>
                            <select
                              id="veteranStatus"
                              name="veteranStatus"
                              value={formData.veteranStatus}
                              onChange={handleInputChange}
                              className={fieldClass}
                            >
                              {veteranOptions.map((v) => (
                                <option key={v} value={v}>
                                  {v}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="disabilityStatus"
                              className="text-xs font-semibold text-muted-foreground"
                            >
                              Disability Status
                            </label>
                            <select
                              id="disabilityStatus"
                              name="disabilityStatus"
                              value={formData.disabilityStatus}
                              onChange={handleInputChange}
                              className={fieldClass}
                            >
                              {disabilityOptions.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Submission Readiness Checklist */}
                    <div className="mt-6 rounded-lg border border-border bg-surface p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-gold" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                            Submission Readiness Checklist
                          </h4>
                        </div>
                        <span
                          className={`text-xs font-semibold ${
                            STEPS.every((s) => getStepStatus(s.id).isComplete)
                              ? "text-emerald-500"
                              : "text-amber-500"
                          }`}
                        >
                          {STEPS.filter((s) => getStepStatus(s.id).isComplete).length} of 5 Steps
                          Complete
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        All mandatory fields and required document uploads must be completed before
                        submission is permitted. Click any step to jump directly to it.
                      </p>

                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {STEPS.map((s) => {
                          const { isComplete, missing } = getStepStatus(s.id);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => {
                                setCurrentStep(s.id);
                                window.scrollTo({ top: 350, behavior: "smooth" });
                              }}
                              className={`flex items-start justify-between rounded-lg border p-3 text-left transition-all hover:bg-card ${
                                isComplete
                                  ? "border-emerald-500/30 bg-emerald-500/5 text-foreground"
                                  : "border-amber-500/30 bg-amber-500/5 text-foreground"
                              }`}
                            >
                              <div className="min-w-0 pr-2">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`flex h-4 w-4 items-center justify-center rounded-full text-[0.65rem] font-bold ${
                                      isComplete
                                        ? "bg-emerald-500 text-white"
                                        : "bg-amber-500 text-black"
                                    }`}
                                  >
                                    {isComplete ? "✓" : "!"}
                                  </span>
                                  <span className="text-xs font-semibold">
                                    Step {s.id}: {s.title}
                                  </span>
                                </div>
                                <p className="mt-1 text-[0.7rem] text-muted-foreground">
                                  {isComplete
                                    ? "All required fields completed"
                                    : `${missing.length} required ${missing.length === 1 ? "field" : "fields"} pending`}
                                </p>
                              </div>
                              <span
                                className={`text-[0.7rem] font-medium shrink-0 ${
                                  isComplete ? "text-emerald-500" : "text-amber-500 underline"
                                }`}
                              >
                                {isComplete ? "Ready" : "Jump to Step"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* Stepper Navigation Buttons */}
                {/* ========================================================================= */}
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-surface"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < STEPS.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-1.5 rounded-md bg-gold px-5 py-2.5 text-xs font-bold text-navy transition-transform hover:brightness-105"
                    >
                      <span>Continue to {STEPS[currentStep].title}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <div className="flex flex-col items-end gap-1.5">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-2.5 text-xs font-bold text-navy transition-transform hover:brightness-105 disabled:opacity-50"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Uploading Documents & Submitting…</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Submit Official Application</span>
                          </>
                        )}
                      </button>
                      <p className="text-[0.65rem] text-muted-foreground text-right">
                        Mandatory: All 5 steps and required documents must be completed to submit.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
