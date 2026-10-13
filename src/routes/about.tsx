import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CTASection, Eyebrow, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Fredacorpal™ | Integrated Enterprise Infrastructure",
      description:
        "Fredacorpal operates at the intersection of digital infrastructure, performance marketing, technical expertise, remote talent, enterprise growth and automation.",
      path: "/about",
    }),
  component: About,
});

const pillars = [
  {
    title: "Digital Infrastructure",
    body: "The technical substrate behind visibility, measurement and delivery.",
  },
  {
    title: "Performance Marketing",
    body: "Search, social and paid acquisition operated as one accountable system.",
  },
  {
    title: "Technical Expertise",
    body: "Senior engineering judgement applied to growth-critical systems.",
  },
  {
    title: "Remote Talent",
    body: "A vetted global network deployed inside managed operating frameworks.",
  },
  {
    title: "Enterprise Growth",
    body: "Programs designed for governance, scale and multi-market complexity.",
  },
  {
    title: "Automation",
    body: "Repeatable frameworks that reduce manual load and key-person risk.",
  },
];

const values = [
  {
    title: "Operational Reliability",
    body: "Documented process over improvisation, on every engagement.",
  },
  { title: "Verified Outcomes", body: "Measurement corrected before spend or effort is scaled." },
  {
    title: "Exclusivity of Talent",
    body: "Specialists selected through structured technical assessment.",
  },
  {
    title: "Security Discipline",
    body: "Least-privilege access, confidentiality and controlled change.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Fredacorpal™"
        title="Engineering Growth. Connecting Talent. Building the Future."
        description="We are not a conventional marketing agency. Fredacorpal is an integrated infrastructure for enterprise growth, technical capability and elite human talent."
        breadcrumbs={[{ label: "About" }]}
      >
        <ButtonLink to="/contact" size="lg">
          Hire Us
        </ButtonLink>
        <ButtonLink to="/services" variant="light" size="lg">
          See Services
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Our Position"
          title="Operating at the intersection of six disciplines"
          description="Enterprises rarely fail from a lack of tactics. They stall because the infrastructure connecting talent, technology and measurement was never built."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate">
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-gold/30 bg-card p-8 shadow-elevate">
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-5 text-lg leading-relaxed">
                Connect elite remote technical talent networks with enterprise digital
                infrastructures to drive operational acceleration and verified search equity.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-5 text-lg leading-relaxed">
                Establish Fredacorpal as a global standard for integrated service delivery through
                automated frameworks and specialized human talent.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeader eyebrow="Principles" title="How we operate" invert />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50">
                <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Build with an integrated partner"
        primary={{ label: "Hire Us", to: "/contact" }}
        secondary={{ label: "Apply Now", to: "/apply" }}
      />
    </>
  );
}
