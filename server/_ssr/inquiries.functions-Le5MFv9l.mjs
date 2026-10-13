import "./constants-BLFC116i.mjs";
import { a as stringType, i as objectType, r as literalType } from "../_libs/zod.mjs";
import { i as createServerFn } from "./server-CPFmogoR.mjs";
import { t as createServerRpc } from "./createServerRpc-jIhsQpXu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiries.functions-Le5MFv9l.js
var inquirySchema = objectType({
	name: stringType().trim().min(2).max(100),
	company: stringType().trim().min(1).max(120),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	service: stringType().trim().min(1).max(60),
	budget: stringType().trim().min(1).max(60),
	message: stringType().trim().min(20).max(1500)
});
var submitInquiry_createServerFn_handler = createServerRpc({
	id: "91320a5771b7bd16fea166384a6f51abe2a881df9a7d3131cad1b3f7d9e6a608",
	name: "submitInquiry",
	filename: "src/lib/inquiries.functions.ts"
}, (opts) => submitInquiry.__executeServer(opts));
var submitInquiry = createServerFn({ method: "POST" }).inputValidator((input) => inquirySchema.parse(input)).handler(submitInquiry_createServerFn_handler, async ({ data }) => {
	try {
		const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
		const { error } = await supabaseAdmin.from("contact_inquiries").insert({
			name: data.name,
			company: data.company,
			email: data.email,
			phone: data.phone || null,
			service: data.service,
			budget: data.budget,
			message: data.message
		});
		if (error) console.warn("Failed to store inquiry in database:", error);
	} catch (dbError) {
		console.warn("Supabase database insert skipped (optional in production):", dbError);
	}
	const resendKey = process.env["RESEND_API_KEY"];
	if (resendKey) try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${resendKey}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				from: process.env["INQUIRY_FROM_EMAIL"] ?? "Fredacorpal <admin@fredacorpal.world>",
				to: [process.env["INTERNAL_NOTIFICATION_EMAIL"] || "nancyhowoodard@gmail.com"],
				reply_to: data.email,
				subject: `New inquiry — ${data.service} — ${data.company}`,
				text: [
					`Name: ${data.name}`,
					`Company: ${data.company}`,
					`Email: ${data.email}`,
					`Phone: ${data.phone || "—"}`,
					`Service: ${data.service}`,
					`Budget: ${data.budget}`,
					"",
					data.message
				].join("\n")
			})
		});
		if (!res.ok) console.error("Inquiry email failed", res.status, await res.text());
	} catch (mailError) {
		console.error("Inquiry email failed", mailError);
	}
	return { ok: true };
});
//#endregion
export { submitInquiry_createServerFn_handler };
