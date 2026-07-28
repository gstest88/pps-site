import { services } from "@/lib/data/services";

export function getFeaturedServices(limit = 3) {
  return services
    .filter((service) => service.featured)
    .slice(0, limit);
}