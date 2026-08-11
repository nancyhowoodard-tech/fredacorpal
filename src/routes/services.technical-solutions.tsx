import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services[4]!;

export const Route = createFileRoute("/services/technical-solutions")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/technical-solutions",
    }),
  component: () => <ServiceDetail service={service} />,
});
