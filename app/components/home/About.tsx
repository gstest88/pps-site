import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { routes } from "@/lib/routes";

const highlights = [
  "Certified Master Plumber",
  "Licensed & Fully Insured",
  "Residential & Commercial Plumbing",
  "Water Service & Excavation Specialists",
];

export default function About() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src="/plumbing-images/about1.webp"
              alt="Licensed Philadelphia plumber discussing plumbing repairs with a homeowner in a modern kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Heading
              eyebrow="About Philadelphia Plumbing Services"
              title="Serving Philadelphia With Professional Plumbing Solutions"
              subtitle="From routine plumbing repairs to complete water service replacements and excavation projects, Philadelphia Plumbing Services delivers dependable workmanship, honest communication, and lasting solutions for homeowners and businesses."
            />

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#005A9C]" size={22} />

                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button href={routes.about}>Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
