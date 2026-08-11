import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services[2]!;

export const Route = createFileRoute("/services/paid-media")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/paid-media",
    }),
  component: () => <ServiceDetail service={service} />,
});
