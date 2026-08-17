import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
      console.error("Failed to store inquiry", error);
      throw new Error("We could not record your inquiry. Please try again.");
    }

    return { ok: true as const };
  });
