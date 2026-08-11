import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs, Section } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    seoHead({
      title: "Terms of Service | Fredacorpal™ Integrated Services",
      description:
        "The terms governing use of the Fredacorpal™ website and the delivery of Fredacorpal™ integrated services.",
      path: "/terms",
    }),
  component: Terms,
});

const sections = [
  {
    h: "Acceptance of Terms",
    p: "By accessing this website or engaging Fredacorpal™ Integrated Services, you agree to these terms in full. If you do not agree, please discontinue use of the site.",
  },
  {
    h: "Services",
    p: "Services are delivered under individually agreed proposals or statements of work that define scope, deliverables, cadence and commercial terms. Website content is informational and does not constitute an offer.",
  },
  {
    h: "Intellectual Property",
    p: "All brand assets, written content, frameworks and methodologies presented on this website remain the property of Fredacorpal™ unless otherwise agreed in writing.",
  },
  {
    h: "Client Responsibilities",
    p: "Clients are responsible for providing timely access, accurate information and required approvals so that contracted work can proceed as scheduled.",
  },
  {
    h: "Confidentiality",
    p: "Both parties agree to protect confidential information exchanged during an engagement and to limit access to those with a legitimate need.",
  },
  {
    h: "Limitation of Liability",
    p: "To the maximum extent permitted by law, Fredacorpal™ is not liable for indirect or consequential losses arising from use of this website.",
  },
  {
    h: "Governing Terms",
    p: "Where a signed agreement exists between you and Fredacorpal™, that agreement takes precedence over these website terms.",
  },
];

function Terms() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Terms" }]} />
      <h1 className="mt-6 font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: January 2026</p>
      <div className="mt-10 max-w-3xl space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-bold">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink to="/">Return Home</ButtonLink>
        <ButtonLink to="/contact" variant="outline">
          Contact Us
        </ButtonLink>
      </div>
    </Section>
  );
}
