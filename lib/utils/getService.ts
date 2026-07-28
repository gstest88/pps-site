import { services } from "@/lib/data/services";

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}