import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    {
      "bg-[#005A9C] text-white hover:bg-[#004A81]":
        variant === "primary",

      "bg-[#F5F7F9] text-[#123B63] hover:bg-[#E8EEF3]":
        variant === "secondary",

      "border border-[#005A9C] text-[#005A9C] hover:bg-[#005A9C] hover:text-white":
        variant === "outline",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}