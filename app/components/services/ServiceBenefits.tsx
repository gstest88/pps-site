import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

import { Service } from "@/lib/types/service";
import { CheckCircle2 } from "lucide-react";

interface Props {
  service: Service;
}

export default function ServiceBenefits({ service }: Props) {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Why Choose This Service"
          title="Professional Solutions Built to Last"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 p-8"
            >
              <CheckCircle2 className="text-[#005A9C]" />

              <span className="text-lg text-slate-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}