import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#005A9C]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}