import { Service } from "@/lib/types/service";
import { site } from "@/lib/config/site";

interface Props {
  service: Service;
}

export default function BreadcrumbSchema({
  service,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: site.url,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Services",

        item: `${site.url}/services`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: service.title,

        item: `${site.url}/services/${service.slug}`,
      },
    ],
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