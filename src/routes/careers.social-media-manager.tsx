import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/CareerDetail";
import { careers } from "@/data/site";
import { seoHead } from "@/lib/seo";

const job = careers[1]!;

export const Route = createFileRoute("/careers/social-media-manager")({
  head: () =>
    seoHead({
      title: job.metaTitle,
      description: job.metaDescription,
      path: "/careers/social-media-manager",
    }),
  component: () => <CareerDetail job={job} />,
});
