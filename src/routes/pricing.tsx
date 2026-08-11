import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    seoHead({
      title: "Pricing & Consultation | Fredacorpal™ Integrated Services",
      description:
        "Strategic, Growth and Enterprise engagement tiers with custom pricing tailored to your infrastructure requirements.",
      path: "/pricing",
    }),
  component: Pricing,
});

const tiers = [
  {
    name: "Strategic",
    for: "For businesses beginning their digital transformation.",
    includes: [
      "Infrastructure and visibility assessment",
      "Single-pillar delivery focus",
      "Monthly reporting and review",
      "Documented remediation roadmap",
    ],
    featured: false,
  },
  {
    name: "Growth",
    for: "For organizations scaling existing digital operations.",
    includes: [
      "Multi-pillar integrated delivery",
      "Dedicated specialist allocation",
      "Creative and testing programs",
      "Bi-weekly performance governance",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    for: "For organizations requiring integrated infrastructure.",
    includes: [
      "Full-stack infrastructure programs",
      "Deployed remote delivery teams",
      "Multi-market and multi-brand governance",
      "Executive reporting and strategic advisory",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Engagements Scoped to Your Infrastructure"
        description="Every enterprise has different infrastructure requirements. Request a consultation for a tailored proposal."
        breadcrumbs={[{ label: "Pricing" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Request Pricing
        </ButtonLink>
        <ButtonLink to="/contact" variant="light" size="lg">
          Talk to an Expert
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Engagement Tiers"
          title="Three levels of integrated delivery"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 70}>
              <article
                className={
                  "flex h-full flex-col rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate " +
                  (tier.featured
                    ? "border-gold shadow-elevate"
                    : "border-border hover:border-gold/60")
                }
              >
                {tier.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">
                    Most Selected
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{tier.for}</p>
                <p className="mt-6 font-display text-3xl font-bold text-gold">
                  Custom Pricing
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-2">
                  <ButtonLink to="/contact" variant={tier.featured ? "gold" : "outline"}>
                    Request Pricing
                  </ButtonLink>
                  <ButtonLink to="/contact" variant="ghost" size="sm">
                    Talk to an Expert
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Every enterprise has different infrastructure requirements. Pricing is
            determined by scope, delivery cadence and the specialists deployed — request
            a consultation for a tailored proposal.
          </p>
        </Reveal>
      </Section>

      <CTASection
        title="Request a tailored proposal"
        primary={{ label: "Request Pricing", to: "/contact" }}
        secondary={{ label: "See Services", to: "/services" }}
      />
    </>
  );
}
