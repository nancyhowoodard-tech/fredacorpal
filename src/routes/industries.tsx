import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { industries } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    seoHead({
      title: "Industries We Serve | Fredacorpal™ Integrated Services",
      description:
        "Enterprise infrastructure for technology, e-commerce, professional services, startups, corporate enterprises, creative businesses and B2B organizations.",
      path: "/industries",
    }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Infrastructure Built for Your Operating Context"
        description="Delivery models adapted to the regulatory, commercial and technical realities of each sector we serve."
        breadcrumbs={[{ label: "Industries" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Discuss Your Industry
        </ButtonLink>
        <ButtonLink to="/services" variant="light" size="lg">
          See Services
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Sectors"
          title="Where Fredacorpal delivers"
          description="Every engagement is scoped to the buying cycle, compliance posture and technical stack of your industry."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 60}>
              <article className="h-full rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate">
                <h3 className="font-display text-lg font-bold">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Discuss your industry with a strategist"
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Partner With Us", to: "/partnerships" }}
      />
    </>
  );
}
