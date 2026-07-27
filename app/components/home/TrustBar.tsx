import Container from "../ui/Container";
import { ShieldCheck, BadgeCheck, Building2, MapPin } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Certified",
    subtitle: "Master Plumber",
  },
  {
    icon: BadgeCheck,
    title: "Licensed",
    subtitle: "& Insured",
  },
  {
    icon: Building2,
    title: "Residential",
    subtitle: "& Commercial",
  },
  {
    icon: MapPin,
    title: "Serving",
    subtitle: "Philadelphia",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-slate-200 py-10 md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.subtitle}
              className="flex flex-col items-center justify-center px-8 py-6 text-center"
            >
              <item.icon
                className="mb-5 text-[#005A9C]"
                size={34}
                strokeWidth={1.6}
              />

              <p className="text-lg font-semibold text-[#123B63]">
                {item.title}
              </p>

              <p className="text-slate-500">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}