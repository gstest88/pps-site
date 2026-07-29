import { CheckCircle2, MapPin } from "lucide-react";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

const serviceAreas = [
  "Center City",
  "South Philadelphia",
  "West Philadelphia",
  "North Philadelphia",
  "Northeast Philadelphia",
  "Manayunk",
];

export default function ContactServiceArea() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold text-[#005A9C]">
              <MapPin size={16} />
              Serving Philadelphia
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-[#123B63] sm:text-4xl lg:text-5xl">
              Local plumbing service throughout Philadelphia
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We provide residential and commercial plumbing services across
              Philadelphia. Tell us where you are located and what you need help
              with, and we will confirm availability for your property.
            </p>

            <div className="mt-8">
              <Button href="#request-service">Request Service</Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#123B63]">
              Areas we commonly serve
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                >
                  <CheckCircle2 className="shrink-0 text-[#005A9C]" size={20} />

                  <span className="font-medium text-slate-700">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Not sure whether your address is in our service area? Send us your
              location and we will let you know.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
