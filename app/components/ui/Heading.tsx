type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#005A9C]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-[#123B63] lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}