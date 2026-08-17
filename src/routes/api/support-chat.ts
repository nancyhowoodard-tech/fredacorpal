import { createFileRoute } from "@tanstack/react-router";
import { streamText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { APPLY_FORM_URL, CONTACT_EMAIL } from "@/lib/constants";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(30),
});

const SYSTEM_PROMPT = `You are the Fredacorpal™ Integrated Services support assistant.

Brand: Fredacorpal™ Integrated Services — "Connecting Talents, Building the Future."
Tone: professional, concise, enterprise-grade. 2-4 short sentences unless asked for detail.

What Fredacorpal offers:
- Services: SEO, Social Media Management, Paid Media, Customer Support (24/7 multichannel), and Technical Solutions (web/app development, automation, integrations).
- Industries served, Partnership programs, and transparent Pricing tiers are documented on the site.
- Careers: open remote roles include SEO Expert, Social Media Manager, and Customer Care Specialist.
- Applications for every role go through the recruitment form at ${APPLY_FORM_URL} (also embedded on the /apply page).
- Contact/enquiries: ${CONTACT_EMAIL}, or the /contact form.
- Staff members sign in at /staff-portal to reach their dashboard and work log.

Rules:
- Only answer using the information above and general knowledge about how these services work.
- Never invent prices, guarantees, timelines, or staff names. If unsure, point the visitor to /contact or ${CONTACT_EMAIL}.
- When someone wants to apply or work with Fredacorpal, direct them to the /apply page.
- Never discuss internal systems, credentials, or admin functionality.`;

export const Route = createFileRoute("/api/support-chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return Response.json({ error: "AI support is not configured." }, { status: 500 });
        }

        let parsed;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const gateway = createLovableAiGatewayProvider(apiKey);

        try {
          const result = streamText({
            model: gateway("google/gemini-3.6-flash"),
            system: SYSTEM_PROMPT,
            messages: parsed.messages,
          });
          const text = await result.text;
          return Response.json({ text });
        } catch (error) {
          const status = (error as { statusCode?: number; status?: number })?.statusCode ??
            (error as { status?: number })?.status ?? 500;
          if (status === 429) {
            return Response.json(
              { error: "Support assistant is busy right now. Please try again shortly." },
              { status: 429 },
            );
          }
          if (status === 402 || status === 403) {
            return Response.json(
              { error: `AI support is temporarily unavailable. Email ${CONTACT_EMAIL}.` },
              { status },
            );
          }
          console.error("support-chat failed", error);
          return Response.json({ error: "The assistant could not respond." }, { status: 500 });
        }
      },
    },
  },
});
