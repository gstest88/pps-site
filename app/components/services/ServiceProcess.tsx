import {
  ClipboardCheck,
  Search,
  Wrench,
  CircleCheckBig,
  Sparkles,
} from "lucide-react";

import Heading from "../../components/ui/Heading";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import { Service } from "@/lib/types/service";

const icons = [
  ClipboardCheck,
  Search,
  Wrench,
  CircleCheckBig,
  Sparkles,
];

interface Props {
  service: Service;
}

export default function ServiceProcess({ service }: Props) {
  return (
    <Section className="bg-blue-50/40">
      <Container>
        <Heading
          eyebrow="Our Process"
          title="How We Solve Your Plumbing Problem"
          subtitle="Every job follows a proven process to ensure the problem is diagnosed correctly and fixed the right way the first time."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          {service.process.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.title}
                className="relative"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#005A9C] text-white shadow-lg">
                  <Icon size={36} />
                </div>

                {index < service.process.length - 1 && (
                  <div className="absolute left-20 top-10 hidden h-[2px] w-full -translate-y-1/2 bg-[#005A9C]/20 lg:block" />
                )}

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#005A9C]">
                    Step {index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#123B63]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}