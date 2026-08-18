import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { JobCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { careerBenefits, careers } from "@/data/site";
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

      <Section tone="surface" id="perks">
        <SectionHeader
          eyebrow="Working Here"
          title="What to Expect - Perks and Benefits"
          description="A complete package built around compensation, flexibility, wellbeing, growth and long-term financial security."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((b, i) => (
            <Reveal key={b.slug} delay={i * 60}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-elevate">
                <h3 className="font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {b.subcategories.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <details className="group mt-6 border-t border-border pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-gold">
                    Learn More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <dl className="mt-4 space-y-4">
                    {b.details.map((d) => (
                      <div key={d.title}>
                        <dt className="text-sm font-semibold">{d.title}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {d.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </article>
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
