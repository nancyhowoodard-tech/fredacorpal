import { ExternalLink, MessageSquare, RotateCcw, Send, Sparkles, X } from "lucide-react";
import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_EMAIL, DEFAULT_CHAT_SUGGESTIONS } from "@/lib/constants";

type Msg = {
  role: "user" | "assistant";
  content: string;
  suggestions?: string[];
};

const INITIAL_GREETING: Msg = {
  role: "assistant",
  content:
    'Welcome to **Fredacorpal™ Integrated Services** — *"Connecting Talents, Building the Future."*\n\nI am your enterprise AI support assistant. I can assist you with our **8 canonical departments**, **6 core public practices**, open career positions, 40-point verification application, transparent pricing tiers, and client partnerships.\n\nHow can I help you today?',
  suggestions: DEFAULT_CHAT_SUGGESTIONS,
};

/**
 * Safe parser for inline links, bold text, and formatting.
 */
function FormattedMessage({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1.5 leading-relaxed text-sm">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Check if line is a bullet item
        const isBullet =
          trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("• ");
        const bulletText = isBullet ? trimmed.replace(/^(\*|-|•)\s*/, "") : trimmed;

        // Render inline formatting (markdown links, bold text)
        const renderInline = (str: string) => {
          // Tokenize for markdown links: [label](url) and bold: **text**
          const parts: React.ReactNode[] = [];
          let remaining = str;
          let keyCounter = 0;

          while (remaining.length > 0) {
            // Match markdown link [text](url)
            const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
            // Match bold **text**
            const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

            // Find whichever match comes earliest
            const linkIndex = linkMatch?.index ?? -1;
            const boldIndex = boldMatch?.index ?? -1;

            if (linkIndex === -1 && boldIndex === -1) {
              parts.push(remaining);
              break;
            }

            if (linkIndex !== -1 && (boldIndex === -1 || linkIndex < boldIndex)) {
              if (linkIndex > 0) {
                parts.push(remaining.substring(0, linkIndex));
              }
              const label = linkMatch![1];
              const url = linkMatch![2];
              const isExternal = url.startsWith("http://") || url.startsWith("https://");
              parts.push(
                <a
                  key={`link-${keyCounter++}`}
                  href={url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="font-medium text-gold underline underline-offset-2 hover:text-gold-light inline-flex items-center gap-0.5"
                >
                  {label}
                  {isExternal && <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-80" />}
                </a>,
              );
              remaining = remaining.substring(linkIndex + linkMatch![0].length);
            } else if (boldIndex !== -1) {
              if (boldIndex > 0) {
                parts.push(remaining.substring(0, boldIndex));
              }
              const boldContent = boldMatch![1];
              parts.push(
                <strong key={`bold-${keyCounter++}`} className="font-semibold text-foreground">
                  {boldContent}
                </strong>,
              );
              remaining = remaining.substring(boldIndex + boldMatch![0].length);
            }
          }

          return parts;
        };

        if (isBullet) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-gold font-bold select-none text-xs mt-1">●</span>
              <span className="flex-1">{renderInline(bulletText)}</span>
            </div>
          );
        }

        // Headers
        if (trimmed.startsWith("### ")) {
          return (
            <p key={idx} className="font-display font-bold text-foreground text-sm pt-1">
              {renderInline(trimmed.replace(/^###\s*/, ""))}
            </p>
          );
        }

        return <p key={idx}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>(DEFAULT_CHAT_SUGGESTIONS);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open, loading]);

  const handleSendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
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
          messages: next.map((m) => ({ role: m.role, content: m.content })).slice(-12),
        }),
      });

      const data = (await res.json()) as {
        text?: string;
        suggestions?: string[];
        error?: string;
      };

      const replyContent =
        data.text ??
        data.error ??
        `I couldn't reach support just now. Please email our desk directly at ${CONTACT_EMAIL}.`;

      const newSuggestions =
        data.suggestions && data.suggestions.length > 0
          ? data.suggestions
          : DEFAULT_CHAT_SUGGESTIONS;

      setMessages([
        ...next,
        {
          role: "assistant",
          content: replyContent,
          suggestions: newSuggestions,
        },
      ]);
      setActiveSuggestions(newSuggestions);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: `Our AI support service is currently busy. You can reach out directly via our contact desk at ${CONTACT_EMAIL} or visit /contact.`,
          suggestions: DEFAULT_CHAT_SUGGESTIONS,
        },
      ]);
      setActiveSuggestions(DEFAULT_CHAT_SUGGESTIONS);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const resetChat = () => {
    setMessages([INITIAL_GREETING]);
    setActiveSuggestions(DEFAULT_CHAT_SUGGESTIONS);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-[0_14px_40px_-12px_rgba(212,175,55,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-10px_rgba(212,175,55,1)] active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <div className="relative">
            <MessageSquare className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {open ? (
        <div
          role="dialog"
          aria-label="Fredacorpal Support Chat"
          className="fixed right-4 bottom-24 z-50 flex h-[34rem] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-gold/30 bg-card shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/70 bg-navy px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative shrink-0">
                <img
                  src="/fredlogo.svg"
                  alt="Fredacorpal AI"
                  className="h-9 w-9 rounded-full object-contain border border-gold/40 shadow-sm"
                  width={36}
                  height={36}
                />
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-navy" />
              </div>
              <div>
                <p className="font-display text-sm font-bold tracking-tight">
                  Fredacorpal<span className="text-gold">™</span> AI Support
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>Online · 8 Departments Active</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div ref={scrollRef} className="flex-1 space-y-3.5 overflow-y-auto p-4 bg-background/50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-tr-none bg-gold text-navy font-medium px-4 py-2.5 text-sm shadow-sm"
                      : "max-w-[92%] rounded-2xl rounded-tl-none border border-border/80 bg-surface px-4 py-3 text-sm text-foreground shadow-sm"
                  }
                >
                  {m.role === "user" ? (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  ) : (
                    <FormattedMessage content={m.content} />
                  )}
                </div>

                {/* If it's the welcome message, render initial suggested questions list */}
                {i === 0 && messages.length === 1 && (
                  <div className="mt-3.5 w-full space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 px-1">
                      <Sparkles className="h-3 w-3 text-gold" />
                      Suggested Inquiries:
                    </p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {DEFAULT_CHAT_SUGGESTIONS.map((q, qIdx) => (
                        <button
                          key={qIdx}
                          type="button"
                          disabled={loading}
                          onClick={() => handleSendMessage(q)}
                          className="w-full text-left text-xs font-medium rounded-lg border border-border/80 bg-surface/70 px-3 py-2 text-foreground/90 transition-all hover:border-gold/60 hover:bg-gold/10 hover:text-foreground active:scale-[0.99] disabled:opacity-50"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Loading typing indicator */}
            {loading && (
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-none border border-border/70 bg-surface px-4 py-3 text-xs text-muted-foreground w-fit">
                <span className="flex h-2 w-2 rounded-full bg-gold animate-bounce" />
                <span className="flex h-2 w-2 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                <span className="flex h-2 w-2 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-xs">Consulting Fredacorpal knowledge engine…</span>
              </div>
            )}
          </div>

          {/* Suggested Questions Pills (when conversation is active) */}
          {messages.length > 1 && (
            <div className="border-t border-border/50 bg-surface/50 px-3 py-2">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground/80 shrink-0 flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5 text-gold" />
                  Suggestions:
                </span>
                {activeSuggestions.slice(0, 4).map((sug, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    disabled={loading}
                    onClick={() => handleSendMessage(sug)}
                    className="shrink-0 text-[11px] font-medium rounded-full border border-border/80 bg-background px-2.5 py-1 text-muted-foreground hover:border-gold hover:text-gold transition-colors active:scale-95 disabled:opacity-50"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              placeholder="Ask about departments, careers, services, apply…"
              aria-label="Type your message"
              disabled={loading}
              className="min-h-11 flex-1 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold text-navy font-semibold transition-all hover:bg-gold-light active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
