import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/data/site";
import { seoHead } from "@/lib/seo";

const service = getService("financial-advisory")!;

export const Route = createFileRoute("/services/financial-advisory")({
  head: () =>
    seoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: "/services/financial-advisory",
    }),
  component: () => <ServiceDetail service={service} />,
});
