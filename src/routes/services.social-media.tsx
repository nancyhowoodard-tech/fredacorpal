import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services[1]!;

export const Route = createFileRoute("/services/social-media")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/social-media",
    }),
  component: () => <ServiceDetail service={service} />,
});
