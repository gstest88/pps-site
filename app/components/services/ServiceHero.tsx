import Image from "next/image";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { Service } from "@/lib/types/service";
import { site } from "@/lib/config/site";

interface Props {
  service: Service;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              {site.name}
            </p>

            <h1 className="mt-4 text-5xl font-bold text-[#123B63] lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              {service.heroDescription}
            </p>

            <div className="mt-12 flex gap-4">
              <Button>
                Request Service
              </Button>

              <Button variant="secondary">
                {site.phone}
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-slate-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}