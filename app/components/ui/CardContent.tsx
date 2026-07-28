import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export default function CardContent({
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn("p-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}