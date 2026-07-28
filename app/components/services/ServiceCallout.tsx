import { ShieldCheck, Wrench, Building2, Phone } from "lucide-react";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import { site } from "@/lib/config/site";

export default function ServiceCallout() {
  return (
    <Section className="bg-[#123B63] text-white">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-300">
                Philadelphia Plumbing Services
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Need Professional Plumbing Service?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Whether you&apos;re dealing with a clogged drain, replacing a water
                heater, or installing a new water service, we&apos;re committed to
                providing dependable plumbing solutions throughout Philadelphia.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-300" size={20} />
                  <span>Licensed &amp; Insured</span>
                </div>

                <div className="flex items-center gap-3">
                  <Wrench className="text-blue-300" size={20} />
                  <span>Certified Master Plumber</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="text-blue-300" size={20} />
                  <span>Residential &amp; Commercial Service</span>
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">

              <Button>
                Request Service
              </Button>

              <Button variant="secondary">
                <Phone size={18} className="mr-2" />

                {site.phone}
              </Button>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}