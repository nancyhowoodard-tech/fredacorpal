import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/staff-portal")({
  head: () =>
    seoHead({
      title: "Staff Portal | Fredacorpal™ Integrated Services",
      description:
        "Restricted access point for authenticated Fredacorpal administrative crew members, remote agents and onsite project leads.",
      path: "/staff-portal",
    }),
  component: StaffPortal,
});

const fieldClass =
  "mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white transition-colors placeholder:text-white/40 focus:border-gold focus:outline-none";

function StaffPortal() {
  const [message, setMessage] = useState<string | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(
      "Credentials could not be verified. Authentication is not yet enabled on this environment — contact your project lead for access.",
    );
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
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-display text-2xl font-bold">
            Fredacorpal<span className="text-gold">™</span> Staff Portal
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Restricted access point for authenticated Fredacorpal™ administrative crew
            members, remote agents, and onsite project leads.
          </p>

          <form onSubmit={submit} className="mt-8 grid gap-5">
            <div>
              <label htmlFor="staff-id" className="text-sm font-semibold">
                Email / Staff ID
              </label>
              <input
                id="staff-id"
                name="staffId"
                required
                autoComplete="username"
                className={fieldClass}
                placeholder="agent@fredacorpal.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className={fieldClass}
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" size="lg">
              Sign In
            </Button>

            <Link
              to="/contact"
              className="text-center text-xs text-white/60 transition-colors hover:text-gold"
            >
              Forgot Password
            </Link>
          </form>

          <div aria-live="polite">
            {message ? (
              <p className="mt-6 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-xs leading-relaxed text-white/80">
                {message}
              </p>
            ) : null}
          </div>

          <p className="mt-6 text-[0.7rem] leading-relaxed text-white/40">
            All access attempts are subject to monitoring under Fredacorpal™ security
            policy.
          </p>
        </div>
      </div>
    </div>
  );
}
