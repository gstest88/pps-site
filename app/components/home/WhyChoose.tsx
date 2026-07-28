import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { features } from "../../../lib/data/features";

export default function WhyChoose() {
    return (
        <Section>
            <Container>

                <Heading
                    eyebrow="Why Philadelphia Chooses Us"
                    title="Professional Plumbing Backed by Experience"
                    subtitle="We believe earning your trust starts long before the work begins. Clear communication, dependable service, and quality workmanship are the standards behind every project."
                />

                <div className="mt-20 space-y-12">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex gap-8 rounded-3xl border border-slate-200 bg-white p-10 transition hover:shadow-lg"
                        >
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">

                                <feature.icon
                                    size={30}
                                    className="text-[#005A9C]"
                                />

                            </div>

                            <div>

                                <h3 className="text-2xl font-bold text-[#123B63]">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {feature.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </Container>
        </Section>
    );
}