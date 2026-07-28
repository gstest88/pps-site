import { Service } from "@/lib/types/service";
import { site } from "@/lib/config/site";

interface Props {
  service: Service;
}

export default function ServiceSchema({
  service,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: service.title,

    description: service.metaDescription,

    serviceType: service.title,

    provider: {
      "@type": "Plumber",

      name: site.company.brandName,

      url: site.url,
    },

    areaServed: {
      "@type": "City",

      name: site.serviceArea,
    },

    url: `${site.url}/services/${service.slug}`,

    image: `${site.url}${service.image}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}