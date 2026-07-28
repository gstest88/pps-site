import Link from "next/link";

import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";

import { services } from "@/lib/data/services";
import { Service } from "@/lib/types/service";
import { routes } from "@/lib/routes";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

interface Props {
  service: Service;
}

export default function RelatedServices({ service }: Props) {
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          eyebrow="Explore More Services"
          title="Other Plumbing Services We Offer"
          subtitle="Philadelphia Plumbing Services provides complete residential and commercial plumbing solutions throughout the Philadelphia area."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((related) => {
            const Icon = related.icon;

            return (
              <Link
              key={related.slug}
  href={routes.services.detail(related.slug)}
  className="group block h-full"
>
  <Card className="flex h-full flex-col hover:-translate-y-2 hover:border-[#005A9C] hover:shadow-xl">
    <CardContent className="flex h-full flex-col">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005A9C]/10 transition-colors group-hover:bg-[#005A9C]">
        <Icon
          className="text-[#005A9C] transition-colors group-hover:text-white"
          size={28}
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-[#123B63]">
        {related.title}
      </h3>

      <p className="mt-4 flex-grow text-slate-600">
        {related.shortDescription}
      </p>

      <span className="mt-8 font-semibold text-[#005A9C]">
        Learn More →
      </span>
    </CardContent>
  </Card>
</Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}