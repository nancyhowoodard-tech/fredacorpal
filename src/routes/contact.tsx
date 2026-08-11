import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/Button";
import { PageHero, Section, SectionHeader } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Fredacorpal™ | Request an Enterprise Consultation",
      description:
        "Speak with a Fredacorpal strategist about SEO, social media, paid media, customer support, technical solutions or partnerships.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(20, "Please provide at least 20 characters").max(1500),
});

const serviceOptions = [
  "SEO",
  "Social Media",
  "Paid Media",
  "Customer Support",
  "Technical Solutions",
  "Partnership",
  "Other",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "To be determined",
];

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("success");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request an Enterprise Consultation"
        description="Tell us about your infrastructure requirement and a strategist will respond with next steps."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeader eyebrow="Inquiry" title="Submit your requirement" />
            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold">
                  Full Name
                </label>
                <input id="name" name="name" className={fieldClass} placeholder="Jane Okoro" />
                {errors.name ? (
                  <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-semibold">
                  Company
                </label>
                <input id="company" name="company" className={fieldClass} placeholder="Acme Group" />
                {errors.company ? (
                  <p className="mt-2 text-xs text-destructive">{errors.company}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input id="email" name="email" type="email" className={fieldClass} placeholder="you@company.com" />
                {errors.email ? (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone <span className="text-muted-foreground">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+1 555 000 1234" />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-semibold">
                  Service Required
                </label>
                <select id="service" name="service" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p className="mt-2 text-xs text-destructive">{errors.service}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="budget" className="text-sm font-semibold">
                  Budget Range
                </label>
                <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.budget ? (
                  <p className="mt-2 text-xs text-destructive">{errors.budget}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={fieldClass}
                  placeholder="Describe your current infrastructure and the outcome you need."
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg">
                  Submit Inquiry
                </Button>
              </div>

              <div className="sm:col-span-2" aria-live="polite">
                {status === "success" ? (
                  <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-semibold text-accent-foreground">
                    Inquiry received. A Fredacorpal strategist will respond shortly.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    Please correct the highlighted fields and submit again.
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <aside className="rounded-lg border border-border bg-card p-7">
            <h2 className="font-display text-lg font-bold">Alternate channels</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Email</span>
                  <a
                    href="mailto:hello@fredacorpal.com"
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    hello@fredacorpal.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Partnerships</span>
                  <a
                    href="mailto:partners@fredacorpal.com"
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    partners@fredacorpal.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Operations</span>
                  <span className="text-muted-foreground">
                    Remote-first, delivering across global time zones.
                  </span>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
