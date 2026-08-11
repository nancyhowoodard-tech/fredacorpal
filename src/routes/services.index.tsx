import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { ServiceCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    seoHead({
      title: "Integrated Digital Infrastructure Services | Fredacorpal™",
      description:
        "SEO, social media architecture, paid media acquisition, customer support deployment and technical solutions delivered as one integrated system.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Integrated Digital Infrastructure"
        description="Five delivery pillars operated as one system — engineered, documented and measured against enterprise outcomes."
        breadcrumbs={[{ label: "Services" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Work With Us
        </ButtonLink>
        <ButtonLink to="/pricing" variant="light" size="lg">
          View Pricing
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Delivery Pillars"
          title="Choose the infrastructure your organization needs"
          description="Each pillar can be deployed independently or integrated into a single managed program."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Engagement Model"
          title="How work is scoped and delivered"
          align="center"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Consultation", body: "We review your systems, market and constraints." },
            { step: "02", title: "Scope", body: "A tailored proposal defining deliverables and cadence." },
            { step: "03", title: "Deployment", body: "Specialists are assigned and infrastructure is built." },
            { step: "04", title: "Measurement", body: "Reporting against agreed operational outcomes." },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 60} as="li">
              <div className="h-full rounded-lg border border-border bg-card p-6">
                <span className="font-display text-sm font-bold text-gold">{s.step}</span>
                <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTASection />
    </>
  );
}
