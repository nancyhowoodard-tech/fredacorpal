import { MessageSquare, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Welcome to Fredacorpal™. I can help with our services, pricing, careers and applications. What would you like to know?",
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/support-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(1).slice(-12),
        }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.text ??
            data.error ??
            `I couldn't reach support just now. Please email ${CONTACT_EMAIL}.`,
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: `I couldn't reach support just now. Please email ${CONTACT_EMAIL}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-[0_14px_40px_-12px_rgba(212,175,55,0.9)] transition-transform hover:-translate-y-0.5"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {open ? (
        <div className="fixed right-5 bottom-24 z-50 flex h-[28rem] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-gold/30 bg-card shadow-elevate">
          <div className="border-b border-border bg-navy px-5 py-4 text-white">
            <p className="font-display text-sm font-bold">
              Fredacorpal<span className="text-gold">™</span> Support
            </p>
            <p className="text-xs text-white/60">AI assistant · replies in seconds</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-lg bg-gold/15 px-3 py-2 text-sm"
                    : "mr-auto max-w-[85%] rounded-lg bg-surface px-3 py-2 text-sm text-muted-foreground"
                }
              >
                {m.content}
              </div>
            ))}
            {loading ? (
              <p className="mr-auto rounded-lg bg-surface px-3 py-2 text-sm text-muted-foreground">
                Typing…
              </p>
            ) : null}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              placeholder="Ask about services or careers…"
              aria-label="Message"
              className="min-h-11 flex-1 rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label="Send message"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-gold text-navy disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
