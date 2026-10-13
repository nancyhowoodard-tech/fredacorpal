import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services.find((s) => s.slug === "business-development")!;

export const Route = createFileRoute("/services/business-development")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/business-development",
    }),
  component: () => <ServiceDetail service={service} />,
});
