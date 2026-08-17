import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PageHero, Section, SectionHeader } from "@/components/Primitives";
import { APPLY_FORM_EMBED_URL, APPLY_FORM_URL } from "@/lib/constants";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/apply")({
  head: () =>
    seoHead({
      title: "Apply Now | Fredacorpal™ Recruitment Application",
      description:
        "Submit your Fredacorpal™ recruitment application directly on our site. Remote roles across SEO, social media, paid media, customer care and technical delivery.",
      path: "/apply",
    }),
  component: Apply,
});

function Apply() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title="Application Form"
        description="Complete the official Fredacorpal™ recruitment application below. Your responses are submitted straight to our talent team."
        breadcrumbs={[{ label: "Careers", to: "/careers" }, { label: "Apply" }]}
      >
        <ButtonLink to="/careers" variant="light" size="lg">
          View Open Roles
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Step 1 of 1"
          title="Fredacorpal™ recruitment application"
          description="Applications are reviewed on a rolling basis. Allow up to five business days for a response."
        />

        <div className="mt-10 overflow-hidden rounded-lg border border-gold/30 bg-card shadow-elevate">
          <iframe
            src={APPLY_FORM_EMBED_URL}
            title="Fredacorpal recruitment application form"
            className="h-[1400px] w-full border-0"
            loading="lazy"
          >
            Loading application form…
          </iframe>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Trouble loading the form?{" "}
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-gold hover:underline"
          >
            Open it in a new tab
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </Section>
    </>
  );
}
