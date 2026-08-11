import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = services[3]!;

export const Route = createFileRoute("/services/customer-support")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/customer-support",
    }),
  component: () => <ServiceDetail service={service} />,
});
