import Section from "../ui/Section";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import ServiceCard from "./ServicesCard";

import {
  Construction,
  Droplets,
  Flame,
  Pickaxe,
  Filter,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning, camera inspections, and hydro jetting to restore proper flow.",
    icon: Construction,
    href: "/services/drain-cleaning",
  },
  {
    title: "Water Services",
    description:
      "Water service repair and replacement from the street to your home or business.",
    icon: Droplets,
    href: "/services/water-services",
  },
  {
    title: "Water Heaters",
    description:
      "Installation and replacement of traditional and tankless water heaters.",
    icon: Flame,
    href: "/services/water-heaters",
  },
  {
    title: "Excavation",
    description:
      "Safe excavation for underground water lines, sewer repairs, and utility work.",
    icon: Pickaxe,
    href: "/services/excavation",
  },
  {
    title: "Water Filtration",
    description:
      "Whole-home filtration systems that improve water quality and protect your plumbing.",
    icon: Filter,
    href: "/services/filtration",
  },
  {
    title: "Residential & Commercial",
    description:
      "Reliable plumbing solutions for homeowners, businesses, and property managers.",
    icon: Building2,
    href: "/services",
  },
];

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
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}