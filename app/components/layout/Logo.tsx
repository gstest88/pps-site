import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Philadelphia Plumbing Services"
      className="flex items-center gap-4 transition-opacity hover:opacity-90"
    >
      <Image
        src="/images/logo-icon.png"
        alt=""
        width={60}
        height={60}
        priority
        className="shrink-0"
      />

      <div className="leading-tight">
        <p className="text-lg font-extrabold uppercase tracking-tight text-[#123B63]">
          Philadelphia
        </p>

        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#005A9C]">
          Plumbing Services
        </p>

        <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
          Licensed • Insured
        </p>
      </div>
    </Link>
  );
}
