import Container from "../ui/Container";

export default function AboutStory() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-bold text-[#123B63]">
            Plumbing Done Right.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

            <p>
              Every plumbing job is someone&apos;s home, someone&apos;s business,
              or someone&apos;s investment. That&apos;s why we approach every project
              with the same mindset: do the work correctly, communicate
              honestly, and stand behind the results.
            </p>

            <p>
              Whether we&apos;re repairing a leak, replacing a water service,
              installing a new water heater, or completing a plumbing
              rough-in for new construction, our goal is simple:
              provide dependable plumbing solutions that Philadelphia
              property owners can trust.
            </p>

            <p>
              We focus on delivering quality workmanship, professional
              service, and long-term solutions—not quick fixes.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}