/**
 * ==============================================================================
 * FREDA CORPAL™ INTEGRATED SERVICES — COMPREHENSIVE RECRUITMENT WEBHOOK
 * Google Apps Script backend for fredacorpal.world/apply
 * ==============================================================================
 *
 * This script connects your native website application form directly to:
 *   1) Google Drive: Automatically organizes applicant folders and saves:
 *      - US SSN Card
 *      - Government ID Card / Driver's License
 *      - Resume / Curriculum Vitae
 *   2) Google Sheets: Dynamically maps all 40 columns from your Google Form /
 *      Google Sheet database.
 *
 * HOW TO UPDATE / DEPLOY IN GOOGLE SHEETS (1-2 minutes):
 * 1. Open your Google Sheet (e.g. "Fredacorpal Applications Database").
 * 2. Click "Extensions" > "Apps Script".
 * 3. Select all existing code in Code.gs, delete it, and paste this ENTIRE file.
 * 4. Click "Deploy" (top right) > "Manage deployments".
 * 5. Click the pencil (edit) icon next to your active deployment.
 * 6. Under "Version", select "New version".
 * 7. Ensure "Execute as: Me" and "Who has access: Anyone".
 * 8. Click "Deploy".
 * ==============================================================================
 */

// OPTIONAL: Specific Google Drive Folder ID to store candidate documents.
// Leave as "" to automatically create/use a folder named "Fredacorpal Applications" in your Google Drive root.
const DRIVE_FOLDER_ID = "";

// Private internal notification email (Nancy's private account).
// All candidate notifications and Google Drive links are delivered here.
const NOTIFICATION_EMAIL = "nancyhowoodard@gmail.com";

// Public-facing company email displayed to candidates and clients.
const PUBLIC_CONTACT_EMAIL = "admin@fredacorpal.world";

// Public-facing website domain.
const PUBLIC_WEBSITE_URL = "https://fredacorpal.world";

// Whether to send an automated confirmation receipt email to the applicant acknowledging their submission.
const SEND_CANDIDATE_CONFIRMATION = true;

// The canonical 40 columns matching the Fredacorpal Recruitment Database
const CANONICAL_HEADERS = [
  "Timestamp",
  "FIRST NAME",
  "MIDDLE INITIAL",
  "LAST NAME",
  "MOTHER'S MAIDEN NAME",
  "PHONE NUMBER",
  "EMAIL ADDRESS",
  "RESIDENTIAL ADDRESS",
  "CURRENT TIME ZONE",
  "PRIMARY REMOTE WORK LOCATION TYPE",
  "Internet Connection Reliability & Speed",
  "Is your computer/laptop suitable for secure remote work?",
  "Are you comfortable operating independently across distributed team channels (e.g., Slack, Zoom, Asynchronous documentation)?",
  "Are you willing to undergo a standard background check and identity verification prior to employment offer?",
  "Country of Citizenship / Legal Residence",
  "US Social Security Number (SSN)",
  "US Government ID / Document Number",
  "ID Issuing Authority / State",
  "US SSN CARD",
  "GOVERNMENT ID CARD/DRIVERS LICENSE",
  "ID Expiration Date",
  "Taxpayer Identification Number - (ITIN / EIN)",
  "Desired Employment Type",
  "Earliest Available Start Date",
  "Desired Salary / Hourly Rate ($ USD)",
  "Are you able to maintain core overlapping working hours with US time zones (e.g., 9 AM – 5 PM EST or CST)?",
  "Years of Relevant Work Experience",
  "Most Recent Employer & Job Title",
  "Relevant Certifications or Technical Skills - IF ANY",
  "Upload Resume / CV",
  "Reference A",
  "Reference B",
  "Accuracy Statement",
  "Data Privacy Consent",
  "Digital Signature (Full Legal Name)",
  "Date of Application",
  "Gender Identity",
  "Race / Ethnic Background",
  "Veteran Status",
  "Disability Status",
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJson({ status: "error", message: "No data payload received" }, 400);
    }

    const data = JSON.parse(e.postData.contents);

    // 1. Get or create root Google Drive folder
    let rootFolder;
    if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID.trim() !== "") {
      rootFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
    } else {
      const folders = DriveApp.getFoldersByName("Fredacorpal Applications");
      rootFolder = folders.hasNext()
        ? folders.next()
        : DriveApp.createFolder("Fredacorpal Applications");
    }

    // Format current timestamp
    const timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "yyyy-MM-dd HH:mm:ss",
    );

    // 2. Create a dedicated folder for this applicant inside Google Drive
    const candidateFolderName =
      `${data.firstName || "Applicant"} ${data.lastName || ""} - ${Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd-HHmmss")}`.trim();
    const candidateFolder = rootFolder.createFolder(candidateFolderName);

    // Helper function to decode and save a file to Google Drive
    function saveFile(base64Data, originalFileName, mimeType, label) {
      if (!base64Data || !originalFileName) {
        return "Not provided";
      }
      try {
        const decodedBytes = Utilities.base64Decode(base64Data);
        const resolvedMime = mimeType || "application/octet-stream";
        const cleanFileName = `${label} - ${originalFileName}`.replace(/[/\\?%*:|"<>]/g, "-");
        const blob = Utilities.newBlob(decodedBytes, resolvedMime, cleanFileName);
        const file = candidateFolder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        return file.getUrl();
      } catch (err) {
        return "Upload error: " + err.toString();
      }
    }

    // 3. Process and upload all 3 candidate files
    const ssnCardUrl = saveFile(
      data.ssnCardBase64,
      data.ssnCardFileName,
      data.ssnCardMimeType,
      "SSN_Card",
    );
    const idCardUrl = saveFile(
      data.idCardBase64,
      data.idCardFileName,
      data.idCardMimeType,
      "Government_ID",
    );
    const resumeUrl = saveFile(
      data.resumeBase64,
      data.resumeFileName,
      data.resumeMimeType,
      "Resume_CV",
    );

    // 4. Map candidate values by normalized column name
    const valueMap = {
      timestamp: timestamp,
      "first name": data.firstName || "",
      "middle initial": data.middleInitial || "",
      "last name": data.lastName || "",
      "mother's maiden name": data.mothersMaidenName || "",
      "phone number": data.phone || "",
      "email address": data.email || "",
      "residential address": data.residentialAddress || "",
      "current time zone": data.currentTimeZone || "",
      "primary remote work location type": data.primaryRemoteLocationType || "",
      "internet connection reliability & speed": data.internetReliabilitySpeed || "",
      "is your computer/laptop suitable for secure remote work?": data.computerSuitable || "",
      "are you comfortable operating independently across distributed team channels (e.g., slack, zoom, asynchronous documentation)?":
        data.comfortableDistributed || "",
      "are you willing to undergo a standard background check and identity verification prior to employment offer?":
        data.willingBackgroundCheck || "",
      "country of citizenship / legal residence": data.citizenshipResidence || "",
      "us social security number (ssn)": data.ssn || "",
      "us government id / document number": data.governmentIdNumber || "",
      "id issuing authority / state": data.idIssuingAuthority || "",
      "us ssn card": ssnCardUrl,
      "government id card/drivers license": idCardUrl,
      "id expiration date": data.idExpirationDate || "",
      "taxpayer identification number - (itin / ein)": data.itinEin || "",
      "desired employment type": data.employmentType || "",
      "earliest available start date": data.earliestStartDate || "",
      "desired salary / hourly rate ($ usd)": data.desiredCompensation || "",
      "are you able to maintain core overlapping working hours with us time zones (e.g., 9 am – 5 pm est or cst)?":
        data.usHoursOverlap || "",
      "years of relevant work experience": data.yearsExperience || "",
      "most recent employer & job title": data.recentEmployerTitle || "",
      "relevant certifications or technical skills - if any": data.certificationsSkills || "",
      "upload resume / cv": resumeUrl,
      "reference a": data.referenceA || "",
      "reference b": data.referenceB || "",
      "accuracy statement": data.accuracyStatement || "",
      "data privacy consent": data.dataPrivacyConsent || "",
      "digital signature (full legal name)": data.digitalSignature || "",
      "date of application": data.applicationDate || timestamp.split(" ")[0],
      "gender identity": data.genderIdentity || "",
      "race / ethnic background": data.raceEthnicity || "",
      "veteran status": data.veteranStatus || "",
      "disability status": data.disabilityStatus || "",
    };

    // 5. Append candidate row to active Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    let rowValues = [];

    if (sheet.getLastRow() === 0) {
      // Empty sheet: Write the canonical 40 headers with Fredacorpal branding
      sheet.appendRow(CANONICAL_HEADERS);
      const headerRange = sheet.getRange(1, 1, 1, CANONICAL_HEADERS.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0A192F");
      headerRange.setFontColor("#D4AF37");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);

      rowValues = CANONICAL_HEADERS.map((h) => valueMap[h.trim().toLowerCase()] || "");
    } else {
      // Existing sheet (e.g. from Google Forms): dynamically match existing column headers
      const existingHeaders = sheet
        .getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
        .getValues()[0];

      rowValues = existingHeaders.map((header) => {
        const cleanHeader = (header || "").toString().trim().toLowerCase();
        if (valueMap.hasOwnProperty(cleanHeader)) {
          return valueMap[cleanHeader];
        }
        // Fallback: check if header starts with or contains any key
        for (const key in valueMap) {
          if (cleanHeader.includes(key) || key.includes(cleanHeader)) {
            return valueMap[key];
          }
        }
        return "";
      });
    }

    sheet.appendRow(rowValues);

    // 6. Send instant email notification to recruitment team
    try {
      const recipient = NOTIFICATION_EMAIL || Session.getActiveUser().getEmail();
      if (recipient) {
        const emailSubject = `🚨 New Candidate Application: ${data.firstName || "Applicant"} ${data.lastName || ""} — ${data.employmentType || "Remote"}`;
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1E293B; line-height: 1.6;">
            <div style="background-color: #0A192F; color: #D4AF37; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">Fredacorpal™ Integrated Services</h2>
              <p style="margin: 4px 0 0 0; color: #94A3B8; font-size: 13px;">Recruitment & Talent Operations</p>
            </div>
            <div style="padding: 24px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 8px 8px; background: #ffffff;">
              <h3 style="color: #0F172A; margin-top: 0;">New Application Received</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748B; width: 160px;"><strong>Candidate Name:</strong></td><td style="padding: 6px 0;">${data.firstName || ""} ${data.middleInitial ? data.middleInitial + " " : ""}${data.lastName || ""}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Email Address:</strong></td><td style="padding: 6px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Phone Number:</strong></td><td style="padding: 6px 0;">${data.phone || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Employment Type:</strong></td><td style="padding: 6px 0;">${data.employmentType || "Not specified"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Earliest Start Date:</strong></td><td style="padding: 6px 0;">${data.earliestStartDate || "Immediate"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Desired Compensation:</strong></td><td style="padding: 6px 0;">${data.desiredCompensation || "Not specified"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Experience:</strong></td><td style="padding: 6px 0;">${data.yearsExperience || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Recent Employer / Title:</strong></td><td style="padding: 6px 0;">${data.recentEmployerTitle || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748B;"><strong>Location / Time Zone:</strong></td><td style="padding: 6px 0;">${data.currentTimeZone || "N/A"} (${data.primaryRemoteLocationType || "Remote"})</td></tr>
              </table>

              <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
              
              <h4 style="color: #0A192F; margin: 0 0 10px 0;">📂 Uploaded Documents (Google Drive):</h4>
              <ul style="padding-left: 20px; margin: 0 0 20px 0; font-size: 14px;">
                <li style="margin-bottom: 6px;"><a href="${candidateFolder.getUrl()}" style="color: #0284C7; font-weight: bold; text-decoration: none;">📁 Open Full Candidate Folder</a></li>
                ${resumeUrl !== "Not provided" ? `<li style="margin-bottom: 6px;"><a href="${resumeUrl}" style="color: #0284C7;">📄 View Resume / CV</a></li>` : ""}
                ${idCardUrl !== "Not provided" ? `<li style="margin-bottom: 6px;"><a href="${idCardUrl}" style="color: #0284C7;">🪪 View Government ID</a></li>` : ""}
                ${ssnCardUrl !== "Not provided" ? `<li style="margin-bottom: 6px;"><a href="${ssnCardUrl}" style="color: #0284C7;">🔒 View SSN Card</a></li>` : ""}
              </ul>

              <p style="font-size: 12px; color: #94A3B8; margin-top: 24px; border-top: 1px solid #F1F5F9; padding-top: 12px;">
                This notification was dispatched automatically by Fredacorpal™ Integrated Services Recruitment System.
              </p>
            </div>
          </div>
        `;

        MailApp.sendEmail({
          to: recipient,
          subject: emailSubject,
          htmlBody: emailHtml,
        });
      }
    } catch (mailErr) {
      Logger.log("Recruitment notification email failed: " + mailErr.toString());
    }

    // 7. Optional: Send confirmation receipt to applicant
    if (SEND_CANDIDATE_CONFIRMATION && data.email) {
      try {
        MailApp.sendEmail({
          to: data.email,
          name: "Fredacorpal™ Integrated Services",
          replyTo: PUBLIC_CONTACT_EMAIL,
          subject: "Application Received — Fredacorpal™ Integrated Services",
          htmlBody: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1E293B; line-height: 1.6;">
              <div style="background-color: #0A192F; color: #D4AF37; padding: 20px; border-radius: 8px 8px 0 0;">
                <h2 style="margin: 0; font-size: 20px;">Fredacorpal™ Integrated Services</h2>
                <p style="margin: 4px 0 0 0; color: #94A3B8; font-size: 13px;">Connecting Talents, Building the Future</p>
              </div>
              <div style="padding: 24px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 8px 8px; background: #ffffff;">
                <p>Dear ${data.firstName || "Applicant"},</p>
                <p>Thank you for submitting your application to Fredacorpal™ Integrated Services. We have successfully received your documents and information.</p>
                <p>Our talent acquisition team will review your credentials against current role requirements. If your profile matches our active operational pipelines, a recruiter will reach out directly regarding next steps.</p>
                <p style="margin-top: 20px;">Best regards,<br/>
                <strong>Fredacorpal™ Talent Acquisition Team</strong><br/>
                Email: <a href="mailto:${PUBLIC_CONTACT_EMAIL}" style="color: #0284C7;">${PUBLIC_CONTACT_EMAIL}</a><br/>
                Website: <a href="${PUBLIC_WEBSITE_URL}" style="color: #0284C7;">fredacorpal.world</a></p>
              </div>
            </div>
          `,
        });
      } catch (candidateMailErr) {
        Logger.log("Candidate confirmation email failed: " + candidateMailErr.toString());
      }
    }

    return responseJson({
      status: "success",
      message: "Application recorded successfully",
      folderUrl: candidateFolder.getUrl(),
      files: {
        ssnCardUrl,
        idCardUrl,
        resumeUrl,
      },
    });
  } catch (error) {
    return responseJson({
      status: "error",
      message: error.toString(),
    });
  }
}

function doGet(e) {
  return responseJson({
    status: "ok",
    message:
      "Fredacorpal Comprehensive Recruitment Webhook is active and listening for POST requests.",
  });
}

function responseJson(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
