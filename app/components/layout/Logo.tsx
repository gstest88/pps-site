import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 transition-opacity hover:opacity-90"
    >
      <Image
        src="/logo/ppslogo.jpg"
        alt="Philadelphia Plumbing Services"
        width={56}
        height={56}
        priority
      />

      <div className="leading-tight">
        <p className="text-xl font-bold tracking-tight text-[#123B63]">
          Philadelphia Plumbing Services
        </p>

        <p className="text-sm text-slate-500">
          Licensed • Insured • Trusted
        </p>
      </div>
    </Link>
  );
}