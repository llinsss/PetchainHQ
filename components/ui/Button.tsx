import type React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={clsx(
        "btn h-10 px-4",
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        className
      )}
      {...props}
    />
  );
}
