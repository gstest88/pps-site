import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Heading from "../../components/ui/Heading";

import { Service } from "@/lib/types/service";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

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
            <Card key={problem} className="group hover:-translate-y-1 hover:border-red-300 hover:shadow-lg">
  <CardContent className="flex items-center gap-4">
    <AlertTriangle
      className="text-red-500 transition-transform duration-300 group-hover:scale-110"
      size={28}
    />

    <span>{problem}</span>
  </CardContent>
</Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}