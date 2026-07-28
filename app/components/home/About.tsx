import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Certified Master Plumber",
  "Licensed & Fully Insured",
  "Residential & Commercial Expertise",
  "Focused on Quality Workmanship",
];

export default function About() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-slate-200 shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="Philadelphia Plumbing Services technician"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Heading
              eyebrow="About Us"
              title="Professional Plumbing Built on Trust"
              subtitle="Philadelphia Plumbing Services provides dependable residential and commercial plumbing with an emphasis on quality workmanship, honest communication, and long-term solutions—not temporary fixes."
            />

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2
                    className="text-[#005A9C]"
                    size={22}
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}