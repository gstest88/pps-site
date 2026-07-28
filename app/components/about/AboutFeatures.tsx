import {
  ShieldCheck,
  Wrench,
  Building2,
  BadgeCheck,
  Clock3,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Professional plumbing services performed with safety, quality, and code compliance in mind.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description:
      "We focus on long-lasting repairs and installations—not temporary fixes.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description:
      "From single-family homes to commercial properties, we're equipped for projects of all sizes.",
  },
  {
    icon: BadgeCheck,
    title: "Honest Recommendations",
    description:
      "We explain your options clearly so you can make informed decisions without pressure.",
  },
  {
    icon: Clock3,
    title: "Dependable Service",
    description:
      "We respect your time by arriving prepared and completing work efficiently.",
  },
  {
    icon: MapPin,
    title: "Philadelphia Focused",
    description:
      "Proudly serving homeowners and businesses throughout the Philadelphia area.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-[#123B63]">
            Why Choose Philadelphia Plumbing Services?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We believe quality plumbing starts with honest communication,
            dependable workmanship, and treating every customer with respect.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#005A9C]/10 p-4">
                  <Icon className="h-7 w-7 text-[#005A9C]" />
                </div>

                <h3 className="text-xl font-semibold text-[#123B63]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}