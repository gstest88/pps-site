import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export default function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn("px-8 pt-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}