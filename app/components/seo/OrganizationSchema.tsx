import { site } from "@/lib/config/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Plumber",

    name: site.company.brandName,

    legalName: site.company.legalName,

    url: site.url,

    telephone: site.phone,

    email: site.email,

    address: {
      "@type": "PostalAddress",

      addressLocality: site.serviceArea,

      addressRegion: site.state,

      addressCountry: site.country,
    },

    areaServed: {
      "@type": "City",

      name: site.serviceArea,
    },
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