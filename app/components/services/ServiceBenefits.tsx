import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

import { Service } from "@/lib/types/service";
import { CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

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
            <Card
            key={benefit} className="group hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-lg">
  <CardContent className="flex items-center gap-4">
    <CheckCircle2
      className="text-[#005A9C] transition-transform duration-300 group-hover:scale-110"
      size={28}
    />

    <span className="text-lg text-slate-700">
      {benefit}
    </span>
  </CardContent>
</Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}