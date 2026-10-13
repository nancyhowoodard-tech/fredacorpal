import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CONTACT_EMAIL, INTERNAL_NOTIFICATION_EMAIL } from "@/lib/constants";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(60),
  budget: z.string().trim().min(1).max(60),
  message: z.string().trim().min(20).max(1500),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("contact_inquiries").insert({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone || null,
        service: data.service,
        budget: data.budget,
        message: data.message,
      });
      if (error) {
        console.warn("Failed to store inquiry in database:", error);
      }
    } catch (dbError) {
      console.warn("Supabase database insert skipped (optional in production):", dbError);
    }

    const resendKey = process.env["RESEND_API_KEY"];
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env["INQUIRY_FROM_EMAIL"] ?? "Fredacorpal <admin@fredacorpal.world>",
            to: [process.env["INTERNAL_NOTIFICATION_EMAIL"] || INTERNAL_NOTIFICATION_EMAIL],
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
              data.message,
            ].join("\n"),
          }),
        });
        if (!res.ok) console.error("Inquiry email failed", res.status, await res.text());
      } catch (mailError) {
        console.error("Inquiry email failed", mailError);
      }
    }

    return { ok: true as const };
  });
