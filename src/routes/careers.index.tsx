import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Filter, Search, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { JobCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { careerBenefits, careers, departments } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers/")({
  head: () =>
    seoHead({
      title: "All Open Positions & Careers | Fredacorpal™",
      description:
        "Explore all open remote positions across our eight corporate departments. Engineering, client care, digital growth, finance, strategy, business development, operations, and talent solutions.",
      path: "/careers",
    }),
  component: Careers,
});

function Careers() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const deptsWithOpenRoles = departments.filter((d) => d.openCareerSlugs.length > 0);

  const filteredCareers = careers.filter((job) => {
    const matchesDept = selectedDept === "all" || job.departmentSlug === selectedDept;
    const matchesSearch =
      searchQuery.trim() === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Careers & Talent"
        title="Join the Workforce"
        description="Elite Talent. Remote Opportunity. Global Impact. Explore all open positions across our eight specialized operating departments."
        breadcrumbs={[{ label: "Careers" }]}
      >
        <ButtonLink to="/apply" size="lg">
          Apply Now
        </ButtonLink>
        <ButtonLink to="/departments" variant="light" size="lg">
          Explore Departments
        </ButtonLink>
      </PageHero>

      {/* Open Positions Section with Department Grouping, Search, and Filter */}
      <Section id="open-positions">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeader
              eyebrow="Active Hiring"
              title="Open Positions Across Departments"
              description="Every position is 100% remote, managed, and supported by documented operating frameworks and US time-zone collaboration."
            />
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <Search
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search by role or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
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
            All Open Roles ({careers.length})
          </button>
          {deptsWithOpenRoles.map((d) => (
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
              {d.name.split("&")[0].trim()} ({d.openCareerSlugs.length})
            </button>
          ))}
        </div>

        {/* Roles Count & Summary */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Showing <strong className="text-foreground">{filteredCareers.length}</strong> of{" "}
            {careers.length} open positions
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-gold hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Roles Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCareers.map((job, i) => (
            <Reveal key={job.slug} delay={Math.min(i * 30, 600)}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="mt-12 rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-base font-semibold text-foreground">No roles matched your search.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword or reset the department filter to view all {careers.length}{" "}
              openings.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedDept("all");
                setSearchQuery("");
              }}
              className="mt-4 rounded-md bg-gold px-4 py-2 text-xs font-semibold text-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Section>

      {/* General Application & Expressions of Interest */}
      <Section tone="surface" id="general-application">
        <div className="mx-auto max-w-4xl rounded-xl border border-gold/30 bg-card p-8 md:p-12 shadow-elevate">
          <div className="flex flex-col items-center text-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold mb-4">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Don’t see your exact role title?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We are constantly expanding our global specialist roster across all eight departments.
              Submit your resume, experience, and credentials through our 5-step intake portal to be
              matched with active and upcoming initiatives.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <ButtonLink to="/apply" size="lg">
                Apply Now
              </ButtonLink>
              <ButtonLink to="/departments" variant="light" size="lg">
                Explore Departments
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Career Benefits */}
      <Section>
        <SectionHeader
          eyebrow="Why Fredacorpal"
          title="Engineered for high-performing remote specialists"
          description="We provide the stability, operational infrastructure, and tools necessary for exceptional professionals to thrive globally."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-elevate">
                <h3 className="font-display text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to join the network?"
        description="Complete our comprehensive 5-step verification application to access global enterprise opportunities."
        primary={{ label: "Apply Now", to: "/apply" }}
        secondary={{ label: "Hire Us", to: "/contact" }}
      />
    </>
  );
}
