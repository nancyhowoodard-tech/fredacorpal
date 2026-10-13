import { t as APPLICATIONS_WEBHOOK_URL } from "./constants-BLFC116i.mjs";
import { a as stringType, i as objectType, r as literalType } from "../_libs/zod.mjs";
import { i as createServerFn } from "./server-CPFmogoR.mjs";
import { t as createServerRpc } from "./createServerRpc-jIhsQpXu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/application.functions-BbqSWP34.js
var applicationSchema = objectType({
	firstName: stringType().trim().min(1, "First name is required").max(100),
	middleInitial: stringType().trim().max(10).optional().or(literalType("")),
	lastName: stringType().trim().min(1, "Last name is required").max(100),
	mothersMaidenName: stringType().trim().min(1, "Mother's maiden name is required for identity verification").max(100),
	phone: stringType().trim().min(7, "Please enter a valid phone number").max(40),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	residentialAddress: stringType().trim().min(5, "Please enter your full residential address").max(500),
	currentTimeZone: stringType().min(1, "Current time zone is required"),
	primaryRemoteLocationType: stringType().min(1, "Remote work location type is required"),
	citizenshipResidence: stringType().min(1, "Country of citizenship / legal residence is required"),
	internetReliabilitySpeed: stringType().min(1, "Internet connection reliability & speed is required"),
	computerSuitable: stringType().min(1, "Computer/laptop suitability response is required"),
	comfortableDistributed: stringType().min(1, "Distributed team comfort response is required"),
	willingBackgroundCheck: stringType().min(1, "Background check agreement is required"),
	usHoursOverlap: stringType().min(1, "Core overlapping hours response is required"),
	ssn: stringType().trim().min(4, "US Social Security Number is required").max(30),
	governmentIdNumber: stringType().trim().min(2, "Government ID number is required").max(50),
	idIssuingAuthority: stringType().trim().min(2, "ID issuing authority / state is required").max(100),
	idExpirationDate: stringType().min(1, "ID expiration date is required"),
	itinEin: stringType().trim().max(50).optional().or(literalType("")),
	ssnCardFileName: stringType().min(1, "US SSN Card upload is required"),
	ssnCardMimeType: stringType().min(1, "SSN Card file type is required"),
	ssnCardBase64: stringType().min(1, "SSN Card file content is required"),
	idCardFileName: stringType().min(1, "Government ID / Driver's License upload is required"),
	idCardMimeType: stringType().min(1, "Government ID file type is required"),
	idCardBase64: stringType().min(1, "Government ID file content is required"),
	resumeFileName: stringType().min(1, "Resume / CV upload is required"),
	resumeMimeType: stringType().min(1, "Resume file type is required"),
	resumeBase64: stringType().min(1, "Resume file content is required"),
	employmentType: stringType().min(1, "Desired employment type is required"),
	earliestStartDate: stringType().min(1, "Earliest available start date is required"),
	desiredCompensation: stringType().trim().min(1, "Desired salary / hourly rate is required").max(100),
	yearsExperience: stringType().min(1, "Years of relevant work experience is required"),
	recentEmployerTitle: stringType().trim().min(2, "Most recent employer & job title is required").max(250),
	certificationsSkills: stringType().trim().max(3e3).optional().or(literalType("")),
	referenceA: stringType().trim().min(5, "Professional Reference A details are required").max(500),
	referenceB: stringType().trim().min(5, "Professional Reference B details are required").max(500),
	accuracyStatement: stringType().min(1, "Accuracy statement certification is required"),
	dataPrivacyConsent: stringType().min(1, "Data privacy consent is required"),
	digitalSignature: stringType().trim().min(2, "Digital signature (full legal name) is required").max(150),
	applicationDate: stringType().min(1, "Date of application is required"),
	genderIdentity: stringType().optional().or(literalType("")),
	raceEthnicity: stringType().optional().or(literalType("")),
	veteranStatus: stringType().optional().or(literalType("")),
	disabilityStatus: stringType().optional().or(literalType(""))
});
var submitApplication_createServerFn_handler = createServerRpc({
	id: "221c7da9c29d7ecaf15960852a06997ab607af1afc6c97218b9bb33ceedc7aa5",
	name: "submitApplication",
	filename: "src/lib/application.functions.ts"
}, (opts) => submitApplication.__executeServer(opts));
var submitApplication = createServerFn({ method: "POST" }).validator((input) => applicationSchema.parse(input)).handler(submitApplication_createServerFn_handler, async ({ data }) => {
	const webhookUrl = process.env["APPLICATIONS_WEBHOOK_URL"] || process.env["VITE_APPLICATIONS_WEBHOOK_URL"] || APPLICATIONS_WEBHOOK_URL;
	let webhookSuccess = false;
	let driveFolderUrl = "";
	let fileUrls = {};
	if (webhookUrl) try {
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(data)
		});
		if (response.ok) {
			const resJson = await response.json().catch(() => ({}));
			webhookSuccess = resJson.status === "success";
			driveFolderUrl = resJson.folderUrl || "";
			fileUrls = resJson.files || { resumeUrl: resJson.fileUrl };
		} else console.error("Google Apps Script webhook returned non-OK", response.status);
	} catch (err) {
		console.error("Failed to forward application to Google Apps Script webhook", err);
	}
	else console.warn("APPLICATIONS_WEBHOOK_URL is not configured yet. Application data processed in preview mode.");
	const resendKey = process.env["RESEND_API_KEY"];
	if (resendKey) try {
		await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${resendKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				from: process.env["INQUIRY_FROM_EMAIL"] ?? "Fredacorpal Talent <admin@fredacorpal.world>",
				to: [process.env["INTERNAL_NOTIFICATION_EMAIL"] || "nancyhowoodard@gmail.com"],
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
					`Signed By: ${data.digitalSignature} on ${data.applicationDate}`
				].filter(Boolean).join("\n")
			})
		});
	} catch (mailError) {
		console.error("Application email notification failed", mailError);
	}
	return {
		ok: true,
		webhookConfigured: Boolean(webhookUrl),
		webhookSuccess,
		driveFolderUrl,
		fileUrls
	};
});
//#endregion
export { submitApplication_createServerFn_handler };
