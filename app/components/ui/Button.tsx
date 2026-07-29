import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  contentClassName?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  contentClassName,
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    {
      "bg-[#005A9C] hover:bg-[#004A81]": variant === "primary",

      "bg-[#F5F7F9] hover:bg-[#E8EEF3]": variant === "secondary",

      "border border-[#005A9C] bg-transparent hover:bg-[#005A9C]":
        variant === "outline",
    },
    className,
  );

  const content = (
    <span
      className={clsx(
        "inline-flex items-center justify-center gap-2 transition-colors duration-300",
        {
          "text-white": variant === "primary",
          "text-[#123B63]": variant === "secondary",
          "text-[#005A9C] group-hover:text-white": variant === "outline",
        },
        contentClassName,
      )}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
