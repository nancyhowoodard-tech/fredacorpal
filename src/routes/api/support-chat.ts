import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getKnowledgeBaseAnswer, handleSupportChat } from "@/lib/support-bot";

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

export const Route = createFileRoute("/api/support-chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ error: "Invalid request format." }, { status: 400 });
        }

        try {
          const response = await handleSupportChat(parsed.messages);
          return Response.json({
            text: response.text,
            suggestions: response.suggestions,
          });
        } catch (error) {
          console.error("Support chat error:", error);
          const fallback = getKnowledgeBaseAnswer(
            parsed.messages[parsed.messages.length - 1]?.content || "",
          );
          return Response.json({
            text: fallback.text,
            suggestions: fallback.suggestions,
          });
        }
      },
    },
  },
});
