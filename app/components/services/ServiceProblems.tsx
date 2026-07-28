import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

import { Service } from "@/lib/types/service";
import { CheckCircle2 } from "lucide-react";

interface Props {
  service: Service;
}

export default function ServiceProblems({ service }: Props) {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Common Issues We Solve"
          title="Expert Service for Your Plumbing Needs"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {service.problems.map((problem) => (
            <div
              key={problem}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 p-8"
            >
              <CheckCircle2 className="text-[#005A9C]" />

              <span className="text-lg text-slate-700">
                {problem}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}