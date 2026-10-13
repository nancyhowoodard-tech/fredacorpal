import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services.find((s) => s.slug === "operations-delivery")!;

export const Route = createFileRoute("/services/operations-delivery")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/operations-delivery",
    }),
  component: () => <ServiceDetail service={service} />,
});
