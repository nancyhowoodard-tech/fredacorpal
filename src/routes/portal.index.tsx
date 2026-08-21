import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, ShieldCheck, UserRound } from "lucide-react";
import { PageHero } from "@/components/Primitives";
import { Reveal } from "@/components/Motion";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/portal/")({
  head: () =>
    seoHead({
      title: "Workforce Portal | Fredacorpal™ Integrated Services",
      description:
        "Single entry point for Fredacorpal™ candidates completing onboarding and administrators managing candidates, documents, offers and employee conversion.",
      path: "/portal",
    }),
  component: WorkforcePortal,
});

const candidateSteps = [
  "Complete onboarding",
  "Upload documents",
  "Review offer",
  "Complete tax forms",
  "Accept agreements",
  "Submit onboarding",
];

const adminSteps = [
  "Manage candidates",
  "Review information",
  "Verify documents",
  "Create offers",
  "Approve onboarding",
  "Convert to employee",
];

function PortalCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  steps,
  cta,
  to,
  accent,
}: {
  icon: typeof UserRound;
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  cta: string;
  to: string;
  accent: "gold" | "navy";
}) {
  return (
    <article
      className={
        "group relative flex flex-col overflow-hidden rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate " +
        (accent === "gold" ? "border-gold/50" : "border-border")
      }
    >
      <span
        className={
          "grid h-12 w-12 place-items-center rounded-md border " +
          (accent === "gold"
            ? "border-gold/60 bg-gold/10 text-gold"
            : "border-border text-foreground")
        }
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="mt-6 text-[0.7rem] tracking-[0.28em] text-gold uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-2 text-muted-foreground">
            <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{step}</span>
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className={
          "mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 " +
          (accent === "gold"
            ? "bg-gold text-navy hover:bg-gold-hover"
            : "border border-gold/60 text-foreground hover:bg-gold/10")
        }
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

function WorkforcePortal() {
  return (
    <>
      <PageHero
        eyebrow="Secure Access"
        title="WORKFORCE PORTAL"
        description="One secure entry point for the Fredacorpal™ workforce lifecycle. Candidates complete onboarding end to end; administrators review, verify and convert them into active team members."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Workforce Portal" }]}
      />

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <PortalCard
                icon={UserRound}
                eyebrow="For new hires"
                title="Candidate Portal"
                description="Sign in with the username and access code issued by your onboarding lead to complete every onboarding requirement in one place."
                steps={candidateSteps}
                cta="Enter Candidate Portal"
                to="/portal/candidate"
                accent="gold"
              />
              <PortalCard
                icon={ShieldCheck}
                eyebrow="For administrators"
                title="Admin Portal"
                description="Restricted workspace for Fredacorpal™ administrators and project leads managing the candidate pipeline and workforce records."
                steps={adminSteps}
                cta="Enter Admin Portal"
                to="/staff-portal"
                accent="navy"
              />
            </div>
          </Reveal>

          <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground">
            Access is issued by administrators only. All sign-in attempts are monitored under
            Fredacorpal™ security policy.
          </p>
        </div>
      </section>
    </>
  );
}
