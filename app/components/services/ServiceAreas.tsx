import { MapPin } from "lucide-react";

import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";

import { company } from "@/lib/data/company";

export default function ServiceAreas() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Service Area"
          title="Proudly Serving Philadelphia"
          subtitle="Providing professional residential and commercial plumbing services throughout Philadelphia and surrounding neighborhoods."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-lg"
            >
              <MapPin
                size={28}
                className="text-[#005A9C]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#123B63]">
                {area}
              </h3>

              <p className="mt-3 text-slate-600">
                Residential & Commercial Plumbing
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}