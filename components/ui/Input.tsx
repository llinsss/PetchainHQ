import type React from "react";
import clsx from "clsx";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "block w-full rounded-lg border-ink-200 focus:border-brand-500 focus:ring-brand-300",
        className
      )}
      {...props}
    />
  );
}
