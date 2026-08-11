import type { Service } from "@/data/site";
import { ButtonLink } from "./Button";
import { CTASection, FAQ, PageHero, Section, SectionHeader } from "./Primitives";
import { Reveal } from "./Motion";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index}`}
        title={service.headline}
        description={service.short}
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      >
        <ButtonLink to="/contact" size="lg">
          Request {service.title.split(" ")[0]} Consultation
        </ButtonLink>
        <ButtonLink to="/services" variant="light" size="lg">
          All Services
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="The Problem" title="Why this matters" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{service.problem}</p>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeader eyebrow="What We Do" title="Our remit" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{service.whatWeDo}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Methodology"
          title="How the infrastructure is built"
          description="Every engagement follows a documented, engineering-led methodology."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.methodology.map((m, i) => (
            <Reveal key={m.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-elevate">
                <h3 className="font-display text-base font-bold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Deliverables" title="What you receive" />
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeader eyebrow="Benefits" title="Operational outcomes" />
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeader eyebrow="Process" title="Delivery sequence" invert />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 60} as="li">
              <div className="h-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50">
                <span className="font-display text-sm font-bold text-gold">{p.step}</span>
                <h3 className="mt-3 font-display text-base font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader eyebrow="Why Fredacorpal" title="The difference in execution" />
            <ul className="mt-8 space-y-4">
              {service.why.map((w) => (
                <li key={w} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeader eyebrow="FAQ" title="Common questions" />
            <div className="mt-8">
              <FAQ items={service.faq} />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={`Request a ${service.title} consultation`}
        description="We will review your current infrastructure and return a scoped, tailored proposal."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
      />
    </>
  );
}
