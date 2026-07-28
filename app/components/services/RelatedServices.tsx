import Link from "next/link";

import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";

import { services } from "@/lib/data/services";
import { Service } from "@/lib/types/service";
import { routes } from "@/lib/routes";

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
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005A9C]/10 transition-colors group-hover:bg-[#005A9C]">
                  <Icon
                    className="text-[#005A9C] transition-colors group-hover:text-white"
                    size={28}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#123B63]">
                  {related.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {related.shortDescription}
                </p>

                <span className="mt-8 inline-flex items-center font-semibold text-[#005A9C] transition-transform group-hover:translate-x-1">
                  Learn More →
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}