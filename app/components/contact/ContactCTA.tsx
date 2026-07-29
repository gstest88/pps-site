import { CheckCircle2, Phone } from "lucide-react";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { site } from "@/lib/config/site";

const trustPoints = [
  "Fast response",
  "Licensed and insured",
  "Residential and commercial",
  "Serving Philadelphia",
];

export default function ContactCTA() {
  const phoneHref = `tel:${site.phone.replace(/\D/g, "")}`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[#123B63] px-6 py-12 shadow-xl sm:px-10 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:64px_64px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#005A9C]/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Ready when you are
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Still have questions about your plumbing project?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Whether you need a repair, a second opinion, or help planning
                upcoming plumbing work, tell us what is going on and we will
                help you determine the next step.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm font-semibold text-white"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-300"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:min-w-56 lg:flex-col">
              <Button href="#request-service" variant="primary">
                Request Service
              </Button>

              <Button
                href={phoneHref}
                variant="outline"
                className="w-full border-white bg-transparent hover:bg-white"
                contentClassName="!text-white group-hover:!text-[#123B63]"
              >
                <Phone size={18} />
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
