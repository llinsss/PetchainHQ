import type React from "react";
import clsx from "clsx";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("card", className)} {...props} />;
}
