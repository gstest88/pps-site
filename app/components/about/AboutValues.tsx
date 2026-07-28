import Container from "../ui/Container";

const values = [
  {
    title: "Quality",
    description:
      "We believe plumbing should be done correctly the first time using dependable materials and proven installation practices.",
  },
  {
    title: "Reliability",
    description:
      "When you schedule service, you deserve clear communication, punctuality, and work you can count on.",
  },
  {
    title: "Respect",
    description:
      "Your home or business is treated with care. We leave the work area clean and communicate throughout the project.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-[#123B63]">
            Our Core Values
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every project is guided by the same principles that define how we
            serve our customers.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-slate-200 p-8"
            >
              <h3 className="text-2xl font-semibold text-[#123B63]">
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}