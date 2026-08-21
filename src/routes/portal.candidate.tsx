import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { UserRound } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { supabase } from "@/integrations/supabase/client";
import { candidateLogin } from "@/lib/portal.functions";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/portal/candidate")({
  ssr: false,
  head: () =>
    seoHead({
      title: "Candidate Portal Login | Fredacorpal™ Integrated Services",
      description:
        "Secure candidate sign-in for Fredacorpal™ onboarding: documents, offers, tax forms and agreements.",
      path: "/portal/candidate",
    }),
  component: CandidateLogin,
});

const fieldClass =
  "mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white transition-colors placeholder:text-white/40 focus:border-gold focus:outline-none";

function CandidateLogin() {
  const navigate = useNavigate();
  const signIn = useServerFn(candidateLogin);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/candidate", replace: true });
    });
  }, [navigate]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);

    try {
      const result = await signIn({
        data: {
          username: String(fd.get("username")).trim(),
          code: String(fd.get("code")).trim(),
        },
      });
      const { error } = await supabase.auth.verifyOtp({
        type: "magiclink",
        token_hash: result.tokenHash,
      });
      if (error) throw new Error(error.message);
      navigate({ to: "/candidate", replace: true });
    } catch {
      setMessage(
        "Those candidate details could not be verified. Check your username and access code, or contact your onboarding lead.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy py-20 text-white">
      <div className="node-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-md rounded-lg border border-gold/30 bg-white/5 p-8 backdrop-blur-md">
          <span className="grid h-12 w-12 place-items-center rounded-md border border-gold/50 text-gold">
            <UserRound className="h-5 w-5" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-display text-2xl font-bold">
            Fredacorpal<span className="text-gold">™</span> Candidate Portal
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Sign in with the username and access code issued by your onboarding lead to complete
            your onboarding.
          </p>

          <form onSubmit={submit} className="mt-8 grid gap-5">
            <div>
              <label htmlFor="username" className="text-sm font-semibold">
                Candidate Username
              </label>
              <input
                id="username"
                name="username"
                required
                autoComplete="username"
                className={fieldClass}
                placeholder="yourusername"
              />
            </div>
            <div>
              <label htmlFor="code" className="text-sm font-semibold">
                Access Code
              </label>
              <input
                id="code"
                name="code"
                type="password"
                required
                autoComplete="one-time-code"
                className={fieldClass}
                placeholder="••••"
              />
            </div>

            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Verifying…" : "Enter Candidate Portal"}
            </Button>

            <Link
              to="/portal"
              className="text-center text-xs text-white/60 transition-colors hover:text-gold"
            >
              Back to Workforce Portal
            </Link>
          </form>

          <div aria-live="polite">
            {message ? (
              <p className="mt-6 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-xs leading-relaxed text-white/80">
                {message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
