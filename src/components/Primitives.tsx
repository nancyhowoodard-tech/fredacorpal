import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";
import { Reveal } from "./Motion";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-gold/60 bg-gold/10 font-display text-sm font-bold text-gold">
        F
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block font-display text-[0.95rem] leading-tight font-bold tracking-tight",
            light ? "text-white" : "text-foreground",
          )}
        >
          Fredacorpal<span className="text-gold">™</span>
        </span>
        <span className="block text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
          Integrated Services
        </span>
      </span>
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl lg:text-[2.75rem]",
          invert && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-gold/60">
              /
            </span>
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; to?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-navy text-white">
      <div className="node-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 lg:py-28">
        {breadcrumbs ? (
          <div className="mb-8 [&_a]:text-white/60 [&_li>span]:text-white/90 [&_nav]:text-white/60">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}

export function CTASection({
  title = "Ready to build enterprise-grade infrastructure?",
  description = "Speak with a Fredacorpal strategist about the systems behind your next phase of growth.",
  primary = { label: "Work With Us", to: "/contact" },
  secondary = { label: "View Pricing", to: "/pricing" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <div className="node-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px gold-rule"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-white/70">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to={primary.to} size="lg">
              {primary.label}
            </ButtonLink>
            <ButtonLink to={secondary.to} variant="light" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold">
            {item.q}
            <span
              aria-hidden="true"
              className="text-gold transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
