"use client";
import { useId } from "react";
import clsx from "clsx";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
};

export function Switch({ checked, onChange, label, className }: SwitchProps) {
  const id = useId();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={label ? id : undefined}
      onClick={() => onChange(!checked)}
      className={clsx(
        "inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? "bg-brand-600" : "bg-ink-200",
        className
      )}
    >
      <span className={clsx("inline-block h-5 w-5 transform rounded-full bg-white transition", checked ? "translate-x-5" : "translate-x-1")} />
      {label && (
        <span id={id} className="sr-only">
          {label}
        </span>
      )}
    </button>
  );
}
