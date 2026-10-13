//#region node_modules/.nitro/vite/services/ssr/assets/constants-BLFC116i.js
/** Official public-facing corporate contact email */
var CONTACT_EMAIL = "admin@fredacorpal.world";
/** Official public-facing recruitment and career inquiries email */
var RECRUITMENT_EMAIL = "admin@fredacorpal.world";
/** External portal URL for staff and onboarding candidates */
var PORTAL_URL = typeof process !== "undefined" && process.env?.["VITE_PORTAL_URL"] || "https://portal.fredacorpal.world";
/** Google Apps Script Webhook URL for recruitment applications (Google Drive & Sheets) */
var APPLICATIONS_WEBHOOK_URL = typeof process !== "undefined" && (process.env?.["APPLICATIONS_WEBHOOK_URL"] || process.env?.["VITE_APPLICATIONS_WEBHOOK_URL"]) || "https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec";
/** Suggested questions for the Fredacorpal AI Support Assistant */
var DEFAULT_CHAT_SUGGESTIONS = [
	"💼 What career opportunities are open?",
	"🏢 What are the 8 canonical departments?",
	"🛠️ What core services do you provide?",
	"📋 How does the application process work?",
	"💰 What are your pricing models?",
	"🔒 How is applicant data protected?",
	"🌐 Where is the staff portal?",
	"⏱️ What are the remote working hours?"
];
//#endregion
export { RECRUITMENT_EMAIL as a, PORTAL_URL as i, CONTACT_EMAIL as n, DEFAULT_CHAT_SUGGESTIONS as r, APPLICATIONS_WEBHOOK_URL as t };
