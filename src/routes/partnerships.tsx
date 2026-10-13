import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { PartnerCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    seoHead({
      title: "Enterprise Partnerships & White-Label Services | Fredacorpal™",
      description:
        "Partner with Fredacorpal for white-label services, talent infrastructure, enterprise packages and strategic collaboration.",
      path: "/partnerships",
    }),
  component: Partnerships,
});

const models = [
  {
    title: "White-Label Services",
    body: "Deliver SEO, social, paid media and support under your brand, backed by our delivery network and documented processes.",
  },
  {
    title: "Talent Infrastructure",
    body: "Access vetted remote specialists on demand without carrying recruitment, onboarding or permanent headcount cost.",
  },
  {
    title: "Enterprise Packages",
    body: "Multi-service programs with governance, consolidated reporting and dedicated delivery leadership.",
  },
  {
    title: "Strategic Collaboration",
    body: "Joint go-to-market arrangements with verified partners, vendors and international ecosystems.",
  },
];

const audiences = [
  "Verified business ecosystems",
  "B2B resellers",
  "International vendor pools",
  "White-label agencies",
  "Strategic partners",
];

function Partnerships() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Build More. Deliver More. Scale Together."
        description="Fredacorpal operates as an infrastructure partner — extending your delivery capacity with enterprise-grade systems and specialist talent."
        breadcrumbs={[{ label: "Partnerships" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Become a Partner
        </ButtonLink>
        <ButtonLink to="/services" variant="light" size="lg">
          See Services
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Partnership Model"
              title="An enterprise-grade delivery layer behind your brand"
              description="Partners retain the client relationship. We supply the infrastructure, specialists and documented process that make delivery predictable at scale."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-lg border border-gold/30 bg-card p-7">
              <h3 className="font-display text-base font-bold">Who we partner with</h3>
              <ul className="mt-5 space-y-3">
                {audiences.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Structures" title="Four ways to work together" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {models.map((m, i) => (
            <Reveal key={m.title} delay={i * 60}>
              <PartnerCard title={m.title} body={m.body} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Become a Fredacorpal partner"
        description="Tell us about your delivery capacity and client base, and we will propose a partnership structure."
        primary={{ label: "Become a Partner", to: "/contact" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
      />
    </>
  );
}
