import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ShieldAlert,
  Briefcase,
  Layers,
  Sparkles,
  Building2,
  Compass,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { CTASection, PageHero, Section, SectionHeader } from "@/components/Primitives";
import { departments, services, careers, type Department } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/departments")({
  head: () =>
    seoHead({
      title: "Departments & Organizational Taxonomy | Fredacorpal™",
      description:
        "Explore Fredacorpal's eight canonical operational departments connecting core capabilities, active public services, and specialized career pathways.",
      path: "/departments",
    }),
  component: DepartmentsPage,
});

type FilterTab = "all" | "active" | "capability";

function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const filteredDepartments = departments.filter((dept) => {
    if (activeTab === "active") return dept.status === "active";
    if (activeTab === "capability") return dept.status === "organizational_capability";
    return true;
  });

  const toggleDept = (slug: string) => {
    setExpandedDept((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      <PageHero
        eyebrow="Corporate Architecture"
        title="Departments & Taxonomy"
        description="The canonical organizational structure connecting eight specialized departments to our active public services, technical delivery capabilities, and global talent pipelines."
        breadcrumbs={[{ label: "Departments" }]}
      >
        <ButtonLink to="/services" size="lg">
          View Active Services
        </ButtonLink>
        <ButtonLink to="/careers" variant="light" size="lg">
          Explore Careers
        </ButtonLink>
      </PageHero>

      {/* Philosophy / Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Architectural Principle"
              title="Organized by specialization, executed as one system"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Fredacorpal™, services and career roles do not exist as disjointed silos. Every
              client engagement, infrastructure deployment, and talent placement is anchored to one
              of our eight core departments.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This master taxonomy guarantees institutional quality, documented operating
              procedures, and seamless multi-disciplinary synergy across digital growth,
              engineering, customer care, and strategic operations.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-lg border border-gold/30 bg-card/60 p-8 backdrop-blur-sm shadow-elevate">
              <div className="flex items-center gap-3 text-gold">
                <Compass className="h-6 w-6" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold">Canonical Structural Flow</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-4 rounded-md border border-border bg-card p-4">
                  <span className="font-display text-base font-bold text-gold">01</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Specialized Department</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      The institutional domain defining domain authority, standards, and strategic
                      remit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-md border border-border bg-card p-4">
                  <span className="font-display text-base font-bold text-gold">02</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Delivery Services</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Commercial, measurable solutions engineered and deployed directly for
                      enterprise clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-md border border-border bg-card p-4">
                  <span className="font-display text-base font-bold text-gold">03</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Career Roles</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Vetted distributed talent executing inside documented standard operating
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Directory Section */}
      <Section tone="surface" id="directory">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeader
              eyebrow="Organizational Directory"
              title="The Eight Canonical Departments"
              description="Review operational scopes, active public services, and talent pipelines for each functional department."
            />
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                activeTab === "all"
                  ? "bg-gold text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({departments.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("active")}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                activeTab === "active"
                  ? "bg-gold text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Active Operations (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("capability")}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                activeTab === "capability"
                  ? "bg-gold text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Enterprise Capabilities (4)
            </button>
          </div>
        </div>

        {/* Department Grid */}
        <div className="mt-12 space-y-6">
          {filteredDepartments.map((dept, i) => (
            <Reveal key={dept.slug} delay={i * 40}>
              <DepartmentCard
                department={dept}
                isExpanded={expandedDept === dept.slug}
                onToggle={() => toggleDept(dept.slug)}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to partner with an integrated enterprise?"
        description="Whether you require end-to-end digital infrastructure deployment or are applying to join our global network."
        primary={{ label: "Hire Us", to: "/contact" }}
        secondary={{ label: "Apply Now", to: "/apply" }}
      />
    </>
  );
}

function DepartmentCard({
  department,
  isExpanded,
  onToggle,
}: {
  department: Department;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const deptServices = services.filter((s) => department.activeServiceSlugs.includes(s.slug));
  const deptCareers = careers.filter((c) => department.openCareerSlugs.includes(c.slug));

  return (
    <article className="group rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-elevate">
      {/* Header Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 font-display text-base font-bold text-gold">
            {department.index}
          </span>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {department.name}
            </h3>
            <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
              {department.slug}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {department.status === "active" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Active Operations
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Enterprise Capability
            </span>
          )}
        </div>
      </div>

      {/* Purpose */}
      <div className="mt-6">
        <h4 className="text-xs font-semibold tracking-wider text-gold uppercase">
          Department Purpose
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {department.purpose}
        </p>
      </div>

      {/* Active Public Services (if any) */}
      {deptServices.length > 0 && (
        <div className="mt-6 border-t border-border pt-6">
          <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-foreground uppercase">
            <Layers className="h-4 w-4 text-gold" aria-hidden="true" />
            Active Public Services ({deptServices.length})
          </h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deptServices.map((service) => (
              <Link
                key={service.slug}
                to={service.to}
                className="group/srv flex items-center justify-between rounded-lg border border-border bg-card/60 p-3.5 text-sm transition-all hover:border-gold/60 hover:bg-gold/5"
              >
                <span className="font-semibold text-foreground group-hover/srv:text-gold">
                  {service.title}
                </span>
                <ArrowRight
                  className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover/srv:translate-x-1 group-hover/srv:text-gold"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Open Careers (if any) */}
      {deptCareers.length > 0 && (
        <div className="mt-6 border-t border-border pt-6">
          <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-foreground uppercase">
            <Briefcase className="h-4 w-4 text-gold" aria-hidden="true" />
            Currently Hiring ({deptCareers.length})
          </h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {deptCareers.map((job) => (
              <Link
                key={job.slug}
                to={job.to}
                className="group/job inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary"
              >
                <span>{job.title}</span>
                <span className="text-xs opacity-75">({job.type})</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/job:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regulatory / Advisory Notices */}
      {department.regulatoryNotice && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
          <p className="leading-relaxed">{department.regulatoryNotice}</p>
        </div>
      )}

      {department.notice && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-xs text-blue-200">
          <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
          <p className="leading-relaxed">{department.notice}</p>
        </div>
      )}

      {/* Collapsible Details: Capabilities & Pipeline Roles */}
      <div className="mt-6 border-t border-border pt-4">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="flex w-full cursor-pointer items-center justify-between text-xs font-semibold tracking-wider text-gold uppercase transition-colors hover:text-gold-hover"
        >
          <span>{isExpanded ? "Hide Department Details" : "View Capabilities & Future Roles"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {isExpanded && (
          <div className="mt-6 grid gap-8 rounded-lg border border-border bg-surface p-6 md:grid-cols-2">
            <div>
              <h5 className="flex items-center gap-2 font-display text-sm font-bold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
                Core Department Capabilities
              </h5>
              <ul className="mt-4 space-y-2.5">
                {department.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="flex items-center gap-2 font-display text-sm font-bold text-foreground">
                <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
                Active Open Positions ({deptCareers.length})
              </h5>
              <p className="mt-1 text-xs text-muted-foreground">
                All primary specialist roles for this department are currently accepting
                applications through our comprehensive 5-step portal.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {deptCareers.slice(0, 8).map((job) => (
                  <span
                    key={job.slug}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {job.title}
                  </span>
                ))}
                {deptCareers.length > 8 && (
                  <span className="rounded-md border border-gold/30 bg-gold/5 px-2.5 py-1 text-xs text-gold">
                    +{deptCareers.length - 8} more open roles
                  </span>
                )}
              </div>
              <div className="mt-5">
                <ButtonLink to="/apply" variant="outline" size="sm">
                  Apply Now
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
