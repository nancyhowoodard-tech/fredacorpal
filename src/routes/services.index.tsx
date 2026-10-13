import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Filter } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ServiceCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { departments, services } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    seoHead({
      title: "All Integrated Services & Solutions | Fredacorpal™",
      description:
        "Explore all enterprise services rendered by Fredacorpal™ across our eight corporate departments: SEO, Social Media, Paid Ads, Customer Support, Tech Solutions, Financial Advisory, Strategy, Business Development, Operations, and Workforce Solutions.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const deptsWithServices = departments.filter((d) => d.activeServiceSlugs.length > 0);

  const filteredServices = services.filter((service) => {
    if (selectedDept === "all") return true;
    return service.departmentSlug === selectedDept;
  });

  return (
    <>
      <PageHero
        eyebrow="Services & Solutions"
        title="Integrated Digital Infrastructure"
        description="Comprehensive delivery pillars operated across our specialized corporate departments — engineered, documented and measured against enterprise outcomes."
        breadcrumbs={[{ label: "Services" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Hire Us
        </ButtonLink>
        <ButtonLink to="/departments" variant="light" size="lg">
          Explore Departments
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeader
              eyebrow="Delivery Pillars"
              title="All Services Rendered by Fredacorpal™"
              description="Each pillar can be deployed independently or integrated into a single managed program."
            />
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase mr-2">
              <Filter className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Department:
            </span>
            <button
              type="button"
              onClick={() => setSelectedDept("all")}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
                selectedDept === "all"
                  ? "bg-gold text-primary shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              All Services ({services.length})
            </button>
            {deptsWithServices.map((d) => (
              <button
                key={d.slug}
                type="button"
                onClick={() => setSelectedDept(d.slug)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
                  selectedDept === d.slug
                    ? "bg-gold text-primary shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.name.split("&")[0].trim()} ({d.activeServiceSlugs.length})
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
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
            {
              step: "01",
              title: "Consultation",
              body: "We review your systems, market and constraints.",
            },
            {
              step: "02",
              title: "Scope",
              body: "A tailored proposal defining deliverables and cadence.",
            },
            {
              step: "03",
              title: "Deployment",
              body: "Specialists are assigned and infrastructure is built.",
            },
            {
              step: "04",
              title: "Measurement",
              body: "Reporting against agreed operational outcomes.",
            },
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
