import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import type { Career, Service, Testimonial } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate">
      <span className="font-display text-sm font-bold tracking-[0.2em] text-gold">
        {service.index}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
      <Link
        to={service.to}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
      >
        {service.ctaLabel}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elevate">
      <div className="flex min-w-0 items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10 font-display text-sm font-bold text-gold">
          {item.initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-bold">{item.name}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {item.position}, {item.company}
          </p>
        </div>
      </div>

      <div
        className="mt-5 flex items-center gap-1"
        aria-label={`Rated ${item.rating} out of 5`}
      >
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{item.quote}”
      </p>

      {item.metric ? (
        <p className="mt-5 rounded-md border border-gold/30 bg-gold/5 px-4 py-3 text-sm font-semibold text-accent-foreground">
          {item.metric}
        </p>
      ) : null}

      <p className="mt-5 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
        {item.service}
      </p>
    </article>
  );
}

export function JobCard({ job }: { job: Career }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-gold uppercase">
          {job.type}
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-muted-foreground uppercase">
          {job.location}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{job.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
        {job.responsibilities.map((r) => (
          <li key={r} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
            {r}
          </li>
        ))}
      </ul>
      <Link
        to={job.to}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
      >
        View Position
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export function PartnerCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
