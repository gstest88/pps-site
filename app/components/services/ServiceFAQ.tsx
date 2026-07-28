import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/Section";
import Accordion from "../../components/ui/Accordion";

import { Service } from "@/lib/types/service";

interface Props {
  service: Service;
}

export default function ServiceFAQ({ service }: Props) {
    
  return (
    <Section className="bg-slate-50">
      <Container>
        <Heading
          eyebrow="Frequently Asked Questions"
          title={`Questions About ${service.title}`}
          subtitle="Here are answers to some of the most common questions we receive from customers throughout Philadelphia."
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion items={service.faqs} />
        </div>
      </Container>
    </Section>
  );
}