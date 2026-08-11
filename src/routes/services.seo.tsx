import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services[0]!;

export const Route = createFileRoute("/services/seo")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/seo",
    }),
  component: () => <ServiceDetail service={service} />,
});
