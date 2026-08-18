import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { JobCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { careers } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/")({
  head: () =>
    seoHead({
      title: "Careers | Join the Fredacorpal™ Workforce",
      description:
        "Elite talent. Remote opportunity. Global impact. Explore open roles across customer care, social media management and technical SEO.",
      path: "/careers",
    }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the Workforce"
        description="Elite Talent. Remote Opportunity. Global Impact."
        breadcrumbs={[{ label: "Careers" }]}
      >
        <ButtonLink to="/apply" size="lg">
          Apply Now
        </ButtonLink>
        <a
          href="#perks"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("perks")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
        >
          View Benefits
        </a>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Open Positions"
          title="Available roles across the delivery network"
          description="Every position is remote, managed and supported by documented operating frameworks."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((job, i) => (
            <Reveal key={job.slug} delay={i * 60}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Working Here" title="What to expect" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Remote by design", b: "Distributed teams with defined coverage windows." },
            { t: "Structured onboarding", b: "Certification against client brand and product standards." },
            { t: "Quality supervision", b: "Coaching cycles and scorecards, not silent evaluation." },
            { t: "Global exposure", b: "Work with enterprises across multiple markets." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to join the network?"
        description="Submit an application and reference the role you are targeting."
        primary={{ label: "Apply Now", to: "/apply" }}
        secondary={{ label: "See Services", to: "/services" }}
      />
    </>
  );
}
