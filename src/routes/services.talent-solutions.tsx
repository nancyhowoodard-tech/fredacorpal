import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services.find((s) => s.slug === "talent-solutions")!;

export const Route = createFileRoute("/services/talent-solutions")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/talent-solutions",
    }),
  component: () => <ServiceDetail service={service} />,
});
