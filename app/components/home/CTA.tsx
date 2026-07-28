import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { site } from "../../../lib/config/site";

export default function CTA() {
  return (
    <Section className="bg-[#123B63] text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Ready to Get Started?
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Professional Plumbing
            <br />
            Starts With One Call.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
            Whether you need emergency repairs, drain cleaning,
            water service replacement, or a new water heater,
            were ready to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Button>

              Request Service

            </Button>

            <Button variant="secondary">

              {site.phone}

            </Button>

          </div>

        </div>
      </Container>
    </Section>
  );
}