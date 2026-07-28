import Section from "../ui/Section";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import ServiceCard from "./ServicesCard";
import { services } from "../../../lib/data/services";
import { routes } from "@/lib/routes";

export default function Services() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>

        <Heading
          eyebrow="Our Services"
          title="Professional Plumbing Solutions for Philadelphia"
          subtitle="From clogged drains to complete water service replacements, we deliver dependable plumbing services with quality workmanship and honest communication."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              href={routes.services.detail(service.slug)}
              description={service.shortDescription}
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}