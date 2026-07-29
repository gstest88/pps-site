import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Section from "../components/ui/Section";

import { services } from "@/lib/data/services";
import { routes } from "@/lib/routes";
import { site } from "@/lib/config/site";
import Navbar from "../components/layout/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}

      <Section className="relative overflow-hidden bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              Philadelphia Plumbing Services
            </p>

            <h1 className="mt-6 text-5xl font-bold text-[#123B63] lg:text-6xl">
              Professional Plumbing Services Throughout Philadelphia
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              From drain cleaning and water heaters to complete water service
              replacements and commercial plumbing, we provide dependable
              plumbing solutions for homes and businesses across Philadelphia.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button>Request Service</Button>

              <Button variant="secondary">{site.phone}</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}

      <Section>
        <Container>
          <Heading
            eyebrow="Our Services"
            title="Complete Plumbing Solutions"
            subtitle="Professional plumbing services performed by a licensed and insured team serving Philadelphia."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={routes.services.detail(service.slug)}
                className="group"
              >
                <article className="rounded-[32px] border border-slate-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-[#123B63] transition-colors group-hover:text-[#005A9C]">
                        {service.title}
                      </h2>

                      <p className="mt-5 leading-8 text-slate-600">
                        {service.shortDescription}
                      </p>
                    </div>

                    <ArrowRight
                      size={28}
                      className="text-[#005A9C] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-10">
                    <span className="font-semibold text-[#005A9C]">
                      Learn More
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
