import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/CareerDetail";
import { careers } from "@/data/site";
import { seoHead } from "@/lib/seo";

const job = careers[2]!;

export const Route = createFileRoute("/careers/seo-expert")({
  head: () =>
    seoHead({
      title: job.metaTitle,
      description: job.metaDescription,
      path: "/careers/seo-expert",
    }),
  component: () => <CareerDetail job={job} />,
});
