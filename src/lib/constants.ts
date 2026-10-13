/** Official public-facing corporate contact email */
export const CONTACT_EMAIL = "admin@fredacorpal.world";

/** Official public-facing recruitment and career inquiries email */
export const RECRUITMENT_EMAIL = "admin@fredacorpal.world";

/** Private internal executive notification email (Nancy's private account) */
export const INTERNAL_NOTIFICATION_EMAIL = "nancyhowoodard@gmail.com";

/** Google Form used for all recruitment applications. */
export const APPLY_FORM_URL = "https://forms.gle/av4BhbFVCsQe7iD19";

/** Embeddable variant of the same Google Form. */
export const APPLY_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdLdUDYJT0czioVMcz2-HU6Rvu4laZi9LPHalW4hrdIIqbSXg/viewform?embedded=true";

export const DEFAULT_HOURLY_RATE = 60;

/** External portal URL for staff and onboarding candidates */
export const PORTAL_URL =
  (typeof process !== "undefined" && process.env?.["VITE_PORTAL_URL"]) ||
  "https://portal.fredacorpal.world";

/** Google Apps Script Webhook URL for recruitment applications (Google Drive & Sheets) */
export const APPLICATIONS_WEBHOOK_URL =
  (typeof process !== "undefined" &&
    (process.env?.["APPLICATIONS_WEBHOOK_URL"] ||
      process.env?.["VITE_APPLICATIONS_WEBHOOK_URL"])) ||
  "https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec";

/** Suggested questions for the Fredacorpal AI Support Assistant */
export const DEFAULT_CHAT_SUGGESTIONS = [
  "💼 What career opportunities are open?",
  "🏢 What are the 8 canonical departments?",
  "🛠️ What core services do you provide?",
  "📋 How does the application process work?",
  "💰 What are your pricing models?",
  "🔒 How is applicant data protected?",
  "🌐 Where is the staff portal?",
  "⏱️ What are the remote working hours?",
];
