import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { site } from "../../../lib/config/site";
import { routes } from "@/lib/routes";

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2">

        <div>

          <div>
  <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#005A9C]">
    Certified Master Plumber • Licensed & Insured
  </span>

  <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-[#123B63] lg:text-7xl">
    Philadelphia&apos;s Trusted
    <br />
    Plumbing Professionals
  </h1>

  <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
    Professional plumbing solutions for homeowners,
    businesses, and property managers throughout
    Philadelphia.
  </p>

  <div className="mt-10 grid gap-4 text-lg text-slate-700">

    <div>✓ Certified Master Plumber</div>

    <div>✓ Residential & Commercial Plumbing</div>

    <div>✓ Water Services • Excavation • Drain Cleaning</div>

  </div>

  <div className="mt-12 flex flex-wrap gap-4">

    <Button href={routes.contact}>

      Request Service

    </Button>

    <Button variant="outline">

      Call {site.phone}

    </Button>

  </div>
</div>
          

        </div>

       <div className="relative h-[700px] overflow-hidden rounded-[32px] shadow-2xl">

  <Image
    src="/images/hero.jpg"
    alt="Philadelphia Plumbing Services"
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/30 via-transparent to-transparent" />
  </div>
  <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">

  <p className="text-sm uppercase tracking-widest text-slate-500">
    Serving
  </p>

  <h3 className="mt-2 text-xl font-bold text-[#123B63]">
    Philadelphia
  </h3>

  <p className="mt-2 text-slate-600">
    Residential & Commercial Plumbing
  </p>

</div>

      </Container>
    </section>
  );
}