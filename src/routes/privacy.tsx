import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/Button";
import { Breadcrumbs, Section } from "@/components/Primitives";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      title: "Privacy Policy | Fredacorpal™ Integrated Services",
      description:
        "How Fredacorpal™ Integrated Services collects, processes, stores and protects personal and client data.",
      path: "/privacy",
    }),
  component: Privacy,
});

const sections = [
  {
    h: "Information We Collect",
    p: "We collect the information you provide through our inquiry and application forms, including name, company, email address, phone number, service interest and message content. We also collect limited technical data such as browser type and pages visited.",
  },
  {
    h: "How We Use Information",
    p: "Information is used to respond to inquiries, evaluate applications, deliver contracted services, improve our website and meet legal or contractual obligations. We do not sell personal data.",
  },
  {
    h: "Legal Basis",
    p: "We process personal data on the basis of legitimate business interest, contractual necessity, or your consent where required by applicable law.",
  },
  {
    h: "Data Retention",
    p: "Personal data is retained only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.",
  },
  {
    h: "Security",
    p: "We apply least-privilege access controls, encryption in transit and confidentiality obligations across our delivery network to protect client and candidate information.",
  },
  {
    h: "Your Rights",
    p: "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, and object to certain processing activities.",
  },
  {
    h: "Contact",
    p: "Questions regarding this policy can be submitted through our contact page and will be routed to the responsible team.",
  },
];

function Privacy() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="mt-6 font-display text-4xl font-bold">Privacy Policy</h1>
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
