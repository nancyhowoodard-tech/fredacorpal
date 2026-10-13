import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as stringType, i as objectType, r as literalType } from "../_libs/zod.mjs";
import { A as CreditCard, B as Briefcase, C as FileUp, D as EyeOff, E as Eye, F as ChevronRight, I as ChevronLeft, M as CloudUpload, N as CircleCheck, P as CircleAlert, T as FileCheckCorner, b as LoaderCircle, c as ShieldCheck, i as Trash2, r as UserCheck, u as Send, w as FileText, y as Lock } from "../_libs/lucide-react.mjs";
import { T as ButtonLink, b as Section, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
import { i as createServerFn } from "./server-CPFmogoR.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-BtABw72d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-Bezt2l-e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var submitApplication = createServerFn({ method: "POST" }).validator((input) => applicationSchema.parse(input)).handler(createSsrRpc("221c7da9c29d7ecaf15960852a06997ab607af1afc6c97218b9bb33ceedc7aa5"));
var timeZoneOptions = [
	"Eastern Time (EST / EDT, UTC-5)",
	"Central Time (CST / CDT, UTC-6)",
	"Mountain Time (MST / MDT, UTC-7)",
	"Pacific Time (PST / PDT, UTC-8)",
	"Alaska Time (AKST / AKDT, UTC-9)",
	"Hawaii-Aleutian Time (HST, UTC-10)",
	"Atlantic Time (AST, UTC-4)",
	"Other / International Time Zone"
];
var remoteLocationOptions = [
	"Dedicated Home Office (Private & Quiet)",
	"Shared Home Workspace",
	"Co-working Space / Private Desk",
	"Other Dedicated Workspace"
];
var internetSpeedOptions = [
	"High-Speed Fiber / Cable (100+ Mbps) — Highly Reliable",
	"Broadband Cable / Fiber (50 – 100 Mbps) — Highly Reliable",
	"Standard Broadband (25 – 50 Mbps) — Occasional Drops",
	"Satellite / Fixed Wireless",
	"Cellular 4G/5G / Mobile Hotspot",
	"Other"
];
var citizenshipOptions = [
	"United States (Citizen)",
	"United States (Permanent Resident / Green Card)",
	"Canada",
	"United Kingdom",
	"Other Country / Legal Jurisdiction"
];
var employmentTypeOptions = [
	"Full-Time (W-2 / Direct Hire)",
	"Part-Time (W-2 / Direct Hire)",
	"Independent Contractor (1099)",
	"Temporary / Project-Based"
];
var experienceOptions = [
	"Entry Level (0 – 1 year)",
	"1 – 2 years",
	"3 – 5 years",
	"5 – 8 years",
	"8+ years (Senior / Principal / Lead)"
];
var genderOptions = [
	"Decline to state / Prefer not to say",
	"Female",
	"Male",
	"Non-binary",
	"Prefer to self-describe"
];
var raceOptions = [
	"Decline to state / Prefer not to say",
	"Hispanic or Latino",
	"White (Not Hispanic or Latino)",
	"Black or African American (Not Hispanic or Latino)",
	"Asian (Not Hispanic or Latino)",
	"American Indian or Alaska Native (Not Hispanic or Latino)",
	"Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
	"Two or More Races (Not Hispanic or Latino)"
];
var veteranOptions = [
	"Decline to state / Prefer not to say",
	"I am not a protected veteran",
	"I identify as one or more classifications of protected veteran",
	"Recently separated veteran"
];
var disabilityOptions = [
	"Decline to state / Prefer not to say",
	"No, I do not have a disability",
	"Yes, I have a disability (or previously had a disability)"
];
var fieldClass = "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";
var STEPS = [
	{
		id: 1,
		title: "Personal & Contact Information",
		shortTitle: "Personal & Contact",
		icon: UserCheck
	},
	{
		id: 2,
		title: "Remote Work Readiness & Technical Setup",
		shortTitle: "Remote Readiness",
		icon: Briefcase
	},
	{
		id: 3,
		title: "Position, Experience & References",
		shortTitle: "Position & Experience",
		icon: FileText
	},
	{
		id: 4,
		title: "Legal Identification & Document Verification",
		shortTitle: "Legal ID & Verification",
		icon: CreditCard
	},
	{
		id: 5,
		title: "Attestation, Signature & EEO Disclosures",
		shortTitle: "Attestation & EEO",
		icon: FileCheckCorner
	}
];
function Apply() {
	const [currentStep, setCurrentStep] = (0, import_react.useState)(1);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const [showSsn, setShowSsn] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
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
		internetReliabilitySpeed: "",
		computerSuitable: "Yes - Dedicated modern computer/laptop meeting high security standards",
		comfortableDistributed: "Yes - Fully comfortable with Slack, Zoom, and asynchronous documentation",
		willingBackgroundCheck: "Yes - I agree to standard background check and identity verification",
		usHoursOverlap: "Yes - Able to maintain full core overlapping hours (e.g. 9 AM – 5 PM EST / CST)",
		ssn: "",
		governmentIdNumber: "",
		idIssuingAuthority: "",
		idExpirationDate: "",
		itinEin: "",
		employmentType: "",
		earliestStartDate: "",
		desiredCompensation: "",
		yearsExperience: "",
		recentEmployerTitle: "",
		certificationsSkills: "",
		referenceA: "",
		referenceB: "",
		accuracyStatement: false,
		dataPrivacyConsent: false,
		digitalSignature: "",
		applicationDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		genderIdentity: "Decline to state / Prefer not to say",
		raceEthnicity: "Decline to state / Prefer not to say",
		veteranStatus: "Decline to state / Prefer not to say",
		disabilityStatus: "Decline to state / Prefer not to say"
	});
	const [ssnCardFile, setSsnCardFile] = (0, import_react.useState)(null);
	const [idCardFile, setIdCardFile] = (0, import_react.useState)(null);
	const [resumeFile, setResumeFile] = (0, import_react.useState)(null);
	const [fileErrors, setFileErrors] = (0, import_react.useState)({});
	const sendApplication = useServerFn(submitApplication);
	(0, import_react.useEffect)(() => {
		try {
			const saved = sessionStorage.getItem("fredacorpal_application_draft");
			if (saved) {
				const parsed = JSON.parse(saved);
				setFormData((prev) => ({
					...prev,
					...parsed,
					ssn: "",
					mothersMaidenName: ""
				}));
			}
		} catch {}
	}, []);
	const handleInputChange = (e) => {
		const { name, value, type } = e.target;
		const checked = e.target.checked;
		setFormData((prev) => {
			const updated = {
				...prev,
				[name]: type === "checkbox" ? checked : value
			};
			try {
				const toSave = {
					...updated,
					ssn: "",
					mothersMaidenName: ""
				};
				sessionStorage.setItem("fredacorpal_application_draft", JSON.stringify(toSave));
			} catch {}
			return updated;
		});
		if (errors[name]) setErrors((prev) => {
			const n = { ...prev };
			delete n[name];
			return n;
		});
	};
	const handleFileUpload = (fileType, e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setFileErrors((prev) => ({
			...prev,
			[fileType]: void 0
		}));
		if (file.size > 10485760) {
			setFileErrors((prev) => ({
				...prev,
				[fileType]: "File exceeds 10MB limit. Please upload a smaller file."
			}));
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			const base64 = reader.result.split(",")[1] || "";
			const uploaded = {
				file,
				base64,
				mimeType: file.type || "application/octet-stream",
				name: file.name
			};
			if (fileType === "ssnCard") setSsnCardFile(uploaded);
			if (fileType === "idCard") setIdCardFile(uploaded);
			if (fileType === "resume") setResumeFile(uploaded);
		};
		reader.onerror = () => {
			setFileErrors((prev) => ({
				...prev,
				[fileType]: "Unable to process file. Please try again."
			}));
		};
		reader.readAsDataURL(file);
	};
	const removeUploadedFile = (fileType) => {
		if (fileType === "ssnCard") setSsnCardFile(null);
		if (fileType === "idCard") setIdCardFile(null);
		if (fileType === "resume") setResumeFile(null);
	};
	const getStepStatus = (stepId) => {
		const missing = [];
		if (stepId === 1) {
			if (!formData.firstName.trim()) missing.push("First Name");
			if (!formData.lastName.trim()) missing.push("Last Name");
			if (!formData.mothersMaidenName.trim()) missing.push("Mother's Maiden Name");
			if (!formData.phone.trim() || formData.phone.length < 7) missing.push("Phone Number");
			if (!formData.email.trim() || !formData.email.includes("@")) missing.push("Email Address");
			if (!formData.residentialAddress.trim() || formData.residentialAddress.length < 5) missing.push("Residential Address");
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
			if (!formData.referenceA.trim() || formData.referenceA.length < 5) missing.push("Reference A");
			if (!formData.referenceB.trim() || formData.referenceB.length < 5) missing.push("Reference B");
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
			if (!formData.digitalSignature.trim() || formData.digitalSignature.length < 2) missing.push("Digital Signature");
			if (!formData.applicationDate) missing.push("Date of Application");
		}
		return {
			isComplete: missing.length === 0,
			missing
		};
	};
	const validateAll = () => {
		const newErrors = {};
		const newFileErrors = {};
		const missingByStep = {
			1: [],
			2: [],
			3: [],
			4: [],
			5: []
		};
		let firstInvalidStep = null;
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
			newFileErrors.idCard = "Please upload an image or PDF of your Government ID / Driver's License";
			missingByStep[4].push("Government ID / Driver's License Upload");
		}
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
		for (let i = 1; i <= 5; i++) if (missingByStep[i].length > 0) {
			firstInvalidStep = i;
			break;
		}
		return {
			isValid: firstInvalidStep === null,
			errors: newErrors,
			fileErrors: newFileErrors,
			firstInvalidStep,
			missingByStep
		};
	};
	const nextStep = () => {
		setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
		window.scrollTo({
			top: 350,
			behavior: "smooth"
		});
	};
	const prevStep = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 1));
		window.scrollTo({
			top: 350,
			behavior: "smooth"
		});
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const { isValid, errors: valErrors, fileErrors: valFileErrors, firstInvalidStep, missingByStep } = validateAll();
		if (!isValid && firstInvalidStep !== null) {
			setErrors(valErrors);
			setFileErrors(valFileErrors);
			const missingList = missingByStep[firstInvalidStep].slice(0, 3).join(", ");
			const extraCount = missingByStep[firstInvalidStep].length - 3;
			setServerError(`Submission Blocked: All required fields and documents must be completed. Redirecting to Step ${firstInvalidStep} (${STEPS[firstInvalidStep - 1].title}) for: ${missingList}${extraCount > 0 ? ` and ${extraCount} more` : ""}.`);
			setCurrentStep(firstInvalidStep);
			window.scrollTo({
				top: 350,
				behavior: "smooth"
			});
			return;
		}
		setStatus("sending");
		setServerError(null);
		try {
			await sendApplication({ data: {
				firstName: formData.firstName.trim(),
				middleInitial: formData.middleInitial.trim() || void 0,
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
				itinEin: formData.itinEin.trim() || void 0,
				ssnCardFileName: ssnCardFile.name,
				ssnCardMimeType: ssnCardFile.mimeType,
				ssnCardBase64: ssnCardFile.base64,
				idCardFileName: idCardFile.name,
				idCardMimeType: idCardFile.mimeType,
				idCardBase64: idCardFile.base64,
				resumeFileName: resumeFile.name,
				resumeMimeType: resumeFile.mimeType,
				resumeBase64: resumeFile.base64,
				employmentType: formData.employmentType,
				earliestStartDate: formData.earliestStartDate,
				desiredCompensation: formData.desiredCompensation.trim(),
				yearsExperience: formData.yearsExperience,
				recentEmployerTitle: formData.recentEmployerTitle.trim(),
				certificationsSkills: formData.certificationsSkills.trim() || void 0,
				referenceA: formData.referenceA.trim(),
				referenceB: formData.referenceB.trim(),
				accuracyStatement: formData.accuracyStatement ? "Confirmed & Certified" : "",
				dataPrivacyConsent: formData.dataPrivacyConsent ? "Consented & Authorized" : "",
				digitalSignature: formData.digitalSignature.trim(),
				applicationDate: formData.applicationDate,
				genderIdentity: formData.genderIdentity || void 0,
				raceEthnicity: formData.raceEthnicity || void 0,
				veteranStatus: formData.veteranStatus || void 0,
				disabilityStatus: formData.disabilityStatus || void 0
			} });
			setStatus("success");
			sessionStorage.removeItem("fredacorpal_application_draft");
			window.scrollTo({
				top: 300,
				behavior: "smooth"
			});
		} catch (err) {
			console.error(err);
			setServerError(err instanceof Error ? err.message : "We encountered an issue submitting your application. Please check your connection and try again.");
			setStatus("error");
		}
	};
	const renderFileUploader = (label, fileType, acceptedTypes, currentFile, errorMessage) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: [label, " *"]
				}),
				!currentFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "group relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface px-6 py-6 transition-all hover:border-gold hover:bg-gold/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-8 w-8 text-muted-foreground transition-colors group-hover:text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-semibold text-foreground",
							children: "Click to select or drag & drop file"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[0.7rem] text-muted-foreground",
							children: [
								"Max 10MB (",
								acceptedTypes.replace(/\./g, "").toUpperCase(),
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: acceptedTypes,
							className: "sr-only",
							onChange: (e) => handleFileUpload(fileType, e)
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between rounded-lg border border-gold/40 bg-gold/5 p-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-md border border-gold/50 bg-gold/10 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs font-semibold text-foreground",
								children: currentFile.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.7rem] text-muted-foreground",
								children: [(currentFile.file.size / 1024).toFixed(1), " KB • Ready for Google Drive"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => removeUploadedFile(fileType),
						className: "ml-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
						"aria-label": `Remove ${label}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					})]
				}),
				errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 flex items-center gap-1 text-xs text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
				})
			]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Recruitment & Onboarding",
		title: "Direct Application Form",
		description: "Official Fredacorpal™ Integrated Services recruitment application. Submit your candidate credentials, verify your identity, and connect with our talent acquisition team.",
		breadcrumbs: [{
			label: "Careers",
			to: "/careers"
		}, { label: "Apply" }],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
			to: "/careers",
			variant: "light",
			size: "lg",
			children: "View Open Positions"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Candidate Portal Intake",
			title: "Candidate Profile & Verification",
			description: "All information submitted is securely encrypted and archived directly into our Google Drive and recruitment database for background and employment screening."
		}), status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-xl border border-gold/40 bg-card p-8 text-center shadow-elevate sm:p-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "h-8 w-8",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-2xl font-bold sm:text-3xl",
					children: "Application Received Successfully"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: [
						"Thank you, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: formData.firstName
						}),
						". Your complete 40-point candidate profile, identification documents, and resume have been securely archived into our Google Drive talent repository and candidate roster."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-md rounded-lg border border-border bg-surface p-4 text-left text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submission Summary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Applicant:"
								}),
								" ",
								formData.firstName,
								" ",
								formData.lastName
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Role / Type:"
								}),
								" ",
								formData.employmentType
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Target Start:"
								}),
								" ",
								formData.earliestStartDate
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Verified Documents:"
							}), " SSN Card, Government ID, and Resume/CV"] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/careers",
							variant: "outline",
							children: "Browse Open Roles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/",
							children: "Return to Homepage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setStatus("idle");
								setCurrentStep(1);
							},
							className: "rounded-md px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-gold",
							children: "Submit Another Application"
						})
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-xl border border-border bg-card shadow-elevate",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface/80 px-6 py-3.5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "256-Bit SSL Encrypted Intake • Secure Google Drive Repository" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-semibold text-gold",
						children: [
							"Step ",
							currentStep,
							" of 5"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto border-b border-border px-4 py-3 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-[580px] justify-between gap-2",
						children: STEPS.map((s) => {
							const isActive = currentStep === s.id;
							const { isComplete } = getStepStatus(s.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setCurrentStep(s.id);
									window.scrollTo({
										top: 350,
										behavior: "smooth"
									});
								},
								className: `flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${isActive ? "bg-gold/10 text-gold ring-1 ring-gold/40" : isComplete ? "text-foreground hover:bg-surface" : "text-muted-foreground hover:text-foreground hover:bg-surface"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-bold ${isActive ? "bg-gold text-navy" : isComplete ? "bg-emerald-500/20 text-emerald-500" : "bg-muted text-muted-foreground"}`,
									children: isComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : s.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.title })]
							}, s.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "p-6 sm:p-10 lg:p-12",
					children: [
						serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Submission Failed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs",
								children: serverError
							})] })]
						}),
						currentStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "1. Personal & Contact Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Please provide your full legal name, permanent contact details, and current location."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "firstName",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "First Name *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "firstName",
												name: "firstName",
												value: formData.firstName,
												onChange: handleInputChange,
												className: fieldClass,
												placeholder: "Legal First Name"
											}),
											errors.firstName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.firstName
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "middleInitial",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Middle Initial"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "middleInitial",
											name: "middleInitial",
											maxLength: 5,
											value: formData.middleInitial,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "e.g. M."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "lastName",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Last Name *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "lastName",
												name: "lastName",
												value: formData.lastName,
												onChange: handleInputChange,
												className: fieldClass,
												placeholder: "Legal Last Name"
											}),
											errors.lastName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.lastName
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "mothersMaidenName",
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Mother's Maiden Name *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "mothersMaidenName",
										name: "mothersMaidenName",
										value: formData.mothersMaidenName,
										onChange: handleInputChange,
										className: fieldClass,
										placeholder: "Maiden Surname"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[0.7rem] text-muted-foreground",
										children: "Used strictly as an identity authentication credential."
									}),
									errors.mothersMaidenName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.mothersMaidenName
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "phone",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Phone Number (Cell / WhatsApp) *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											name: "phone",
											type: "tel",
											value: formData.phone,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "+1 (555) 000-0000"
										}),
										errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.phone
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Email Address *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											name: "email",
											type: "email",
											value: formData.email,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "name@example.com"
										}),
										errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.email
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "residentialAddress",
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Residential Address (Street, Apt/Suite, City, State/Province, ZIP) *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "residentialAddress",
										name: "residentialAddress",
										rows: 2,
										value: formData.residentialAddress,
										onChange: handleInputChange,
										className: fieldClass,
										placeholder: "123 Example Blvd, Apt 4B, Austin, TX 78701"
									}),
									errors.residentialAddress && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.residentialAddress
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "currentTimeZone",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Current Time Zone *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "currentTimeZone",
											name: "currentTimeZone",
											value: formData.currentTimeZone,
											onChange: handleInputChange,
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select Primary Time Zone"
											}), timeZoneOptions.map((tz) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: tz,
												children: tz
											}, tz))]
										}),
										errors.currentTimeZone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.currentTimeZone
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "primaryRemoteLocationType",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Primary Remote Work Location Type *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "primaryRemoteLocationType",
											name: "primaryRemoteLocationType",
											value: formData.primaryRemoteLocationType,
											onChange: handleInputChange,
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select Workspace Setting"
											}), remoteLocationOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: opt,
												children: opt
											}, opt))]
										}),
										errors.primaryRemoteLocationType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.primaryRemoteLocationType
										})
									] })]
								})
							]
						}),
						currentStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "2. Remote Work Readiness & Technical Setup"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Fredacorpal™ maintains rigorous technical and security standards for all remote professionals."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "internetReliabilitySpeed",
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Internet Connection Reliability & Speed *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "internetReliabilitySpeed",
										name: "internetReliabilitySpeed",
										value: formData.internetReliabilitySpeed,
										onChange: handleInputChange,
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select Connection Speed & Reliability"
										}), internetSpeedOptions.map((speed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: speed,
											children: speed
										}, speed))]
									}),
									errors.internetReliabilitySpeed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.internetReliabilitySpeed
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "computerSuitable",
											className: "text-xs font-semibold uppercase tracking-wider text-foreground",
											children: "Is your computer/laptop suitable for secure remote work? *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Requires dedicated private hardware capable of running enterprise security protocols and modern web platforms."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "computerSuitable",
											name: "computerSuitable",
											value: formData.computerSuitable,
											onChange: handleInputChange,
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Yes - Dedicated modern desktop or laptop with secure OS",
												children: "Yes — Dedicated modern desktop or laptop with secure OS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "No - Shared or older hardware",
												children: "No — Shared or insufficient hardware"
											})]
										}),
										errors.computerSuitable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.computerSuitable
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "comfortableDistributed",
											className: "text-xs font-semibold uppercase tracking-wider text-foreground",
											children: "Are you comfortable operating independently across distributed team channels (e.g., Slack, Zoom, Asynchronous documentation)? *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "comfortableDistributed",
											name: "comfortableDistributed",
											value: formData.comfortableDistributed,
											onChange: handleInputChange,
											className: fieldClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Yes - Fully comfortable with Slack, Zoom, and asynchronous documentation",
													children: "Yes — Highly proficient with asynchronous documentation, Slack, Zoom, and remote tooling"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Comfortable with training / Quick learner",
													children: "Comfortable with onboarding & training / Quick learner"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "No",
													children: "No"
												})
											]
										}),
										errors.comfortableDistributed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.comfortableDistributed
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "willingBackgroundCheck",
											className: "text-xs font-semibold uppercase tracking-wider text-foreground",
											children: "Are you willing to undergo a standard background check and identity verification prior to employment offer? *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "willingBackgroundCheck",
											name: "willingBackgroundCheck",
											value: formData.willingBackgroundCheck,
											onChange: handleInputChange,
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Yes - I agree to standard background check and identity verification",
												children: "Yes — I agree to standard background check and identity verification"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "No",
												children: "No"
											})]
										}),
										errors.willingBackgroundCheck && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.willingBackgroundCheck
										})
									]
								})
							]
						}),
						currentStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "3. Position, Experience & References"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Detail your career history, target compensation, professional references, and curriculum vitae."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "employmentType",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Desired Employment Type *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "employmentType",
												name: "employmentType",
												value: formData.employmentType,
												onChange: handleInputChange,
												className: fieldClass,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "Select Employment Type"
												}), employmentTypeOptions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: t,
													children: t
												}, t))]
											}),
											errors.employmentType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.employmentType
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "earliestStartDate",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Earliest Available Start Date *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "earliestStartDate",
												name: "earliestStartDate",
												type: "date",
												value: formData.earliestStartDate,
												onChange: handleInputChange,
												className: fieldClass
											}),
											errors.earliestStartDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.earliestStartDate
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "desiredCompensation",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Desired Salary / Hourly Rate ($ USD) *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "desiredCompensation",
												name: "desiredCompensation",
												value: formData.desiredCompensation,
												onChange: handleInputChange,
												className: fieldClass,
												placeholder: "e.g. $45 / hr or $85,000 / yr"
											}),
											errors.desiredCompensation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.desiredCompensation
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "usHoursOverlap",
											className: "text-xs font-semibold uppercase tracking-wider text-foreground",
											children: "Are you able to maintain core overlapping working hours with US time zones (e.g., 9 AM – 5 PM EST or CST)? *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "usHoursOverlap",
											name: "usHoursOverlap",
											value: formData.usHoursOverlap,
											onChange: handleInputChange,
											className: fieldClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Yes - Able to maintain full core overlapping hours (9 AM – 5 PM EST or CST)",
													children: "Yes — Able to maintain full core overlapping hours (9 AM – 5 PM EST / CST)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Partial overlap (4 to 6 hours daily)",
													children: "Partial overlap (4 to 6 hours daily overlap)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Flexible / Asynchronous only",
													children: "Flexible / Asynchronous work only"
												})
											]
										}),
										errors.usHoursOverlap && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.usHoursOverlap
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "yearsExperience",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Years of Relevant Work Experience *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "yearsExperience",
											name: "yearsExperience",
											value: formData.yearsExperience,
											onChange: handleInputChange,
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select Experience Level"
											}), experienceOptions.map((exp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: exp,
												children: exp
											}, exp))]
										}),
										errors.yearsExperience && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.yearsExperience
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "recentEmployerTitle",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Most Recent Employer & Job Title *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "recentEmployerTitle",
											name: "recentEmployerTitle",
											value: formData.recentEmployerTitle,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "e.g. Acme Tech Corp — Senior Growth Specialist"
										}),
										errors.recentEmployerTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.recentEmployerTitle
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "certificationsSkills",
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Relevant Certifications or Technical Skills — IF ANY"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "certificationsSkills",
									name: "certificationsSkills",
									rows: 2,
									value: formData.certificationsSkills,
									onChange: handleInputChange,
									className: fieldClass,
									placeholder: "e.g. Google Analytics Certified, Salesforce Admin, HubSpot, AWS Solutions Architect, SEO / Semrush..."
								})] }),
								renderFileUploader("Upload Resume / CV", "resume", ".pdf,.doc,.docx", resumeFile, fileErrors.resume),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "referenceA",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Reference A (Name, Title, Organization, Phone, Email) *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "referenceA",
											name: "referenceA",
											rows: 2,
											value: formData.referenceA,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "Jane Doe, VP of Marketing, Apex Global, (555) 234-5678, jdoe@apex.com"
										}),
										errors.referenceA && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.referenceA
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "referenceB",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Reference B (Name, Title, Organization, Phone, Email) *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "referenceB",
											name: "referenceB",
											rows: 2,
											value: formData.referenceB,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "Robert Johnson, Engineering Director, CloudTech, (555) 876-5432, rjohnson@cloudtech.io"
										}),
										errors.referenceB && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.referenceB
										})
									] })]
								})
							]
						}),
						currentStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold text-foreground",
										children: "4. Legal Identification & Document Verification"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Required for legal identity confirmation, tax compliance, and payroll readiness. All files are securely saved in your candidate Google Drive repository."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "citizenshipResidence",
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Country of Citizenship / Legal Residence *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "citizenshipResidence",
										name: "citizenshipResidence",
										value: formData.citizenshipResidence,
										onChange: handleInputChange,
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select Country / Status"
										}), citizenshipOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: c,
											children: c
										}, c))]
									}),
									errors.citizenshipResidence && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.citizenshipResidence
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "ssn",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "US Social Security Number (SSN) *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShowSsn(!showSsn),
												className: "inline-flex items-center gap-1 text-[0.7rem] text-gold hover:underline",
												children: showSsn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }), " Hide"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }), " Show"] })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "ssn",
											name: "ssn",
											type: showSsn ? "text" : "password",
											value: formData.ssn,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "XXX-XX-XXXX"
										}),
										errors.ssn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.ssn
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "itinEin",
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Taxpayer ID (ITIN / EIN) — If Applicable"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "itinEin",
										name: "itinEin",
										value: formData.itinEin,
										onChange: handleInputChange,
										className: fieldClass,
										placeholder: "XX-XXXXXXX (Optional)"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "governmentIdNumber",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "US Government ID / Document # *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "governmentIdNumber",
												name: "governmentIdNumber",
												value: formData.governmentIdNumber,
												onChange: handleInputChange,
												className: fieldClass,
												placeholder: "Driver's Lic / State ID / Passport #"
											}),
											errors.governmentIdNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.governmentIdNumber
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "idIssuingAuthority",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "ID Issuing Authority / State *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "idIssuingAuthority",
												name: "idIssuingAuthority",
												value: formData.idIssuingAuthority,
												onChange: handleInputChange,
												className: fieldClass,
												placeholder: "e.g. California DMV, NY, US Dept of State"
											}),
											errors.idIssuingAuthority && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.idIssuingAuthority
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "idExpirationDate",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "ID Expiration Date *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "idExpirationDate",
												name: "idExpirationDate",
												type: "date",
												value: formData.idExpirationDate,
												onChange: handleInputChange,
												className: fieldClass
											}),
											errors.idExpirationDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.idExpirationDate
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2 pt-2",
									children: [renderFileUploader("US SSN Card Upload", "ssnCard", ".pdf,.png,.jpg,.jpeg", ssnCardFile, fileErrors.ssnCard), renderFileUploader("Government ID / Driver's License", "idCard", ".pdf,.png,.jpg,.jpeg", idCardFile, fileErrors.idCard)]
								})
							]
						}),
						currentStep === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "5. Attestation, Signature & EEO Disclosures"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Please review and certify your statements, provide your legal digital signature, and complete voluntary demographic disclosures."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 rounded-lg border border-border bg-surface p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												name: "accuracyStatement",
												checked: formData.accuracyStatement,
												onChange: handleInputChange,
												className: "mt-1 h-4 w-4 rounded border-input text-gold focus:ring-gold"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs leading-relaxed text-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Accuracy Statement:" }), " I hereby certify that all information provided in this application is true, accurate, and complete to the best of my knowledge. I understand that any false statements or omissions may lead to rejection of my application or immediate termination of employment. *"]
											})]
										}),
										errors.accuracyStatement && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-destructive pl-7",
											children: errors.accuracyStatement
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												name: "dataPrivacyConsent",
												checked: formData.dataPrivacyConsent,
												onChange: handleInputChange,
												className: "mt-1 h-4 w-4 rounded border-input text-gold focus:ring-gold"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs leading-relaxed text-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Data Privacy & Background Verification Consent:" }), " I authorize Fredacorpal™ Integrated Services to collect, securely store in Google Drive, process, and verify my personal information, references, and legal identification strictly for recruitment and pre-employment background screening. *"]
											})]
										}),
										errors.dataPrivacyConsent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-destructive pl-7",
											children: errors.dataPrivacyConsent
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "digitalSignature",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Digital Signature (Full Legal Name) *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "digitalSignature",
											name: "digitalSignature",
											value: formData.digitalSignature,
											onChange: handleInputChange,
											className: fieldClass,
											placeholder: "Type your full legal name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[0.7rem] text-muted-foreground",
											children: "Serves as a binding electronic signature under the ESIGN Act."
										}),
										errors.digitalSignature && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.digitalSignature
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "applicationDate",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Date of Application *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "applicationDate",
											name: "applicationDate",
											type: "date",
											value: formData.applicationDate,
											onChange: handleInputChange,
											className: fieldClass
										}),
										errors.applicationDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-destructive",
											children: errors.applicationDate
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-border bg-surface p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold uppercase tracking-wider text-foreground",
												children: "Voluntary Equal Opportunity & Demographic Disclosures"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[0.7rem] text-muted-foreground",
												children: "Fredacorpal™ Integrated Services is an equal opportunity employer. Submission of this information is strictly voluntary and will have no adverse impact on your candidacy."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 grid gap-4 sm:grid-cols-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "genderIdentity",
														className: "text-xs font-semibold text-muted-foreground",
														children: "Gender Identity"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														id: "genderIdentity",
														name: "genderIdentity",
														value: formData.genderIdentity,
														onChange: handleInputChange,
														className: fieldClass,
														children: genderOptions.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: g,
															children: g
														}, g))
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "raceEthnicity",
														className: "text-xs font-semibold text-muted-foreground",
														children: "Race / Ethnic Background"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														id: "raceEthnicity",
														name: "raceEthnicity",
														value: formData.raceEthnicity,
														onChange: handleInputChange,
														className: fieldClass,
														children: raceOptions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: r,
															children: r
														}, r))
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "veteranStatus",
														className: "text-xs font-semibold text-muted-foreground",
														children: "Veteran Status"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														id: "veteranStatus",
														name: "veteranStatus",
														value: formData.veteranStatus,
														onChange: handleInputChange,
														className: fieldClass,
														children: veteranOptions.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: v,
															children: v
														}, v))
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														htmlFor: "disabilityStatus",
														className: "text-xs font-semibold text-muted-foreground",
														children: "Disability Status"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														id: "disabilityStatus",
														name: "disabilityStatus",
														value: formData.disabilityStatus,
														onChange: handleInputChange,
														className: fieldClass,
														children: disabilityOptions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: d,
															children: d
														}, d))
													})] })
												]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-lg border border-border bg-surface p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-xs font-bold uppercase tracking-wider text-foreground",
													children: "Submission Readiness Checklist"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `text-xs font-semibold ${STEPS.every((s) => getStepStatus(s.id).isComplete) ? "text-emerald-500" : "text-amber-500"}`,
												children: [STEPS.filter((s) => getStepStatus(s.id).isComplete).length, " of 5 Steps Complete"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "All mandatory fields and required document uploads must be completed before submission is permitted. Click any step to jump directly to it."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 grid gap-2.5 sm:grid-cols-2",
											children: STEPS.map((s) => {
												const { isComplete, missing } = getStepStatus(s.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														setCurrentStep(s.id);
														window.scrollTo({
															top: 350,
															behavior: "smooth"
														});
													},
													className: `flex items-start justify-between rounded-lg border p-3 text-left transition-all hover:bg-card ${isComplete ? "border-emerald-500/30 bg-emerald-500/5 text-foreground" : "border-amber-500/30 bg-amber-500/5 text-foreground"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 pr-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `flex h-4 w-4 items-center justify-center rounded-full text-[0.65rem] font-bold ${isComplete ? "bg-emerald-500 text-white" : "bg-amber-500 text-black"}`,
																children: isComplete ? "✓" : "!"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-xs font-semibold",
																children: [
																	"Step ",
																	s.id,
																	": ",
																	s.title
																]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-[0.7rem] text-muted-foreground",
															children: isComplete ? "All required fields completed" : `${missing.length} required ${missing.length === 1 ? "field" : "fields"} pending`
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-[0.7rem] font-medium shrink-0 ${isComplete ? "text-emerald-500" : "text-amber-500 underline"}`,
														children: isComplete ? "Ready" : "Jump to Step"
													})]
												}, s.id);
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between border-t border-border pt-6",
							children: [currentStep > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: prevStep,
								className: "inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), currentStep < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: nextStep,
								className: "inline-flex items-center gap-1.5 rounded-md bg-gold px-5 py-2.5 text-xs font-bold text-navy transition-transform hover:brightness-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Continue to ", STEPS[currentStep].title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-end gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: status === "sending",
									className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-2.5 text-xs font-bold text-navy transition-transform hover:brightness-105 disabled:opacity-50",
									children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uploading Documents & Submitting…" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit Official Application" })] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] text-muted-foreground text-right",
									children: "Mandatory: All 5 steps and required documents must be completed to submit."
								})]
							})]
						})
					]
				})
			]
		})]
	}) })] });
}
//#endregion
export { Apply as component };
