import { createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/CareerDetail";
import { careers } from "@/data/site";
import { seoHead } from "@/lib/seo";

const job = careers[0]!;

export const Route = createFileRoute("/careers/customer-care")({
  head: () =>
    seoHead({
      title: job.metaTitle,
      description: job.metaDescription,
      path: "/careers/customer-care",
    }),
  component: () => <CareerDetail job={job} />,
});
