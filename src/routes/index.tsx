import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, ShieldCheck, Workflow } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import { ButtonLink } from "@/components/Button";
import { ServiceCard, TestimonialCard } from "@/components/Cards";
import { Counter, Reveal } from "@/components/Motion";
import { CTASection, Eyebrow, Section, SectionHeader } from "@/components/Primitives";
import { services, stats, testimonials } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Fredacorpal™ Integrated Services | Connecting Talents, Building the Future",
      description:
        "Enterprise digital infrastructure, integrated performance marketing, technical services and elite remote talent — engineered to scale organizations globally.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={heroImage}
          alt="Enterprise data infrastructure with illuminated network connections"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/70"
          aria-hidden="true"
        />
        <div className="node-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="container-x relative py-24 lg:py-36">
          <Reveal className="max-w-4xl">
            <Eyebrow>Enterprise Digital Infrastructure</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.03] font-bold text-balance sm:text-6xl lg:text-7xl">
              Fredacorpal<span className="text-gold">™</span> Integrated Services
            </h1>
            <p className="mt-5 font-display text-lg font-semibold text-gold sm:text-2xl">
              Connecting Talents, Building the Future.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/70 lg:text-lg">
              We integrate elite multi-channel performance marketing infrastructures to scale
              enterprises globally. From technical engine validation to complete organic platform
              architecture management, we construct the underlying pipelines that secure brand
              dominance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact" size="lg">
                Hire Us
              </ButtonLink>
              <ButtonLink to="/apply" variant="light" size="lg">
                Apply Now
              </ButtonLink>
              <Link
                to="/services"
                className="group inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-gold"
              >
                Explore Our Services
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-14">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="border-l-2 border-gold/50 pl-5">
                <p className="font-display text-3xl font-bold lg:text-4xl">
                  {s.value > 0 ? (
                    <Counter value={s.value} suffix={s.suffix} />
                  ) : (
                    <span className="text-gradient-gold">Global</span>
                  )}
                </p>
                <p className="mt-2 font-display text-sm font-semibold">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="About Fredacorpal"
              title="Engineering Growth. Connecting Talent. Building the Future."
              description="Fredacorpal operates at the intersection of digital infrastructure, performance marketing, technical expertise, remote talent, enterprise growth and automation — delivering integrated systems rather than isolated campaigns."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Security-minded delivery" },
                { icon: Workflow, label: "Automated frameworks" },
                { icon: Globe2, label: "Global talent network" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-gold/50"
                >
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink to="/about">Discover Fredacorpal</ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={80}>
              <div className="rounded-lg border border-gold/30 bg-card p-7 shadow-elevate">
                <Eyebrow>Mission</Eyebrow>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Connect elite remote technical talent networks with enterprise digital
                  infrastructures to drive operational acceleration and verified search equity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-lg border border-border bg-card p-7">
                <Eyebrow>Vision</Eyebrow>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Establish Fredacorpal as a global standard for integrated service delivery through
                  automated frameworks and specialized human talent.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Services"
          title="Integrated Digital Infrastructure"
          description="Five delivery pillars, operated as one system across search, social, media acquisition, support and technical implementation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/services">See Services</ButtonLink>
          <ButtonLink to="/pricing" variant="outline">
            View Pricing
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Social Proof"
          title="Trusted by operators building at scale"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <TestimonialCard item={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Partnerships"
              title="Build More. Deliver More. Scale Together."
              description="An infrastructure partner for verified business ecosystems, B2B resellers, international vendor pools and white-label agencies."
              invert
            />
          </Reveal>
          <Reveal delay={80} className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink to="/partnerships" size="lg">
              Partner With Us
            </ButtonLink>
            <ButtonLink to="/industries" variant="light" size="lg">
              View Industries
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
