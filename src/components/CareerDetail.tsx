import { Link } from "@tanstack/react-router";
import type { Career } from "@/data/site";
import { ButtonLink } from "./Button";
import { CTASection, FAQ, PageHero, Section, SectionHeader } from "./Primitives";
import { Reveal } from "./Motion";

export function CareerDetail({ job }: { job: Career }) {
  return (
    <>
      <PageHero
        eyebrow={`${job.type} · ${job.department}`}
        title={job.title}
        description={job.summary}
        breadcrumbs={[
          { label: "Departments", to: "/departments" },
          { label: "Careers", to: "/careers" },
          { label: job.title },
        ]}
      >
        <ButtonLink to="/apply" size="lg">
          Apply Now
        </ButtonLink>
        <ButtonLink to="/careers" variant="light" size="lg">
          All Positions
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <SectionHeader eyebrow="Role Overview" title={`About the ${job.title} role`} />
              <p className="mt-6 leading-relaxed text-muted-foreground">{job.summary}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-bold">Responsibilities</h3>
              <ul className="mt-5 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-bold">Required Skills</h3>
              <ul className="mt-5 space-y-3">
                {job.skills.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-bold">Preferred Experience</h3>
              <ul className="mt-5 space-y-3">
                {job.preferred.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-bold">Application Process</h3>
              <ol className="mt-5 space-y-4">
                {job.application.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm text-muted-foreground">
                    <span className="font-display text-sm font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-bold">FAQ</h3>
              <div className="mt-5">
                <FAQ items={job.faq} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="sticky top-28 rounded-lg border border-gold/30 bg-card p-7 shadow-elevate">
              <h2 className="font-display text-lg font-bold">Apply for this position</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Department</dt>
                  <dd className="font-semibold text-gold">
                    <Link to="/departments" className="hover:underline">
                      {job.department}
                    </Link>
                  </dd>
                </div>
                {job.service && job.serviceSlug && (
                  <div>
                    <dt className="text-muted-foreground">Associated Service</dt>
                    <dd className="font-semibold">
                      <Link to={`/services/${job.serviceSlug}`} className="hover:underline">
                        {job.service}
                      </Link>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted-foreground">Employment type</dt>
                  <dd className="font-semibold">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-semibold">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Team</dt>
                  <dd className="font-semibold">Fredacorpal Delivery Network</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Applications are submitted through our secure inquiry form. Select the relevant
                service area and reference this role in your message.
              </p>
              <div className="mt-6 grid gap-2">
                <ButtonLink to="/apply" size="lg">
                  Apply Now
                </ButtonLink>
                <ButtonLink to="/about" variant="outline" size="sm">
                  About Fredacorpal
                </ButtonLink>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Elite talent. Remote opportunity. Global impact."
        description="Explore every open position across the Fredacorpal delivery network."
        primary={{ label: "Apply Now", to: "/apply" }}
        secondary={{ label: "Hire Us", to: "/contact" }}
      />
    </>
  );
}
