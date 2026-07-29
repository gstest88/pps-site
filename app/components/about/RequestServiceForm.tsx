import Container from "../ui/Container";
import Button from "../ui/Button";

import { site } from "@/lib/config/site";

export default function RequestServiceForm() {
  return (
    <section id="request-service" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              REQUEST SERVICE
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B63]">
              Tell Us About Your Project
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Complete the form below and we&apos;ll contact you as soon as
              possible to discuss your plumbing needs.
            </p>
          </div>

          <form className="mt-16 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Name *</label>

                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#005A9C]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Phone *</label>

                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#005A9C]"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Email</label>

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#005A9C]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Requested Service *
                </label>

                <select
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option value="">Select a service</option>

                  {site.services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Property Address</label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                How can we help? *
              </label>

              <textarea
                required
                rows={6}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Tell us about your plumbing issue..."
              />
            </div>

            <Button>Request Service</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
