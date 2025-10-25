"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize from localStorage or system preference
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark") setDark(true);
    else if (stored === "light") setDark(false);
    else {
      // System preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      className={clsx(
        "inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-sm",
        "border-ink-100 bg-white text-ink-800 hover:bg-ink-50",
        "dark:border-ink-800 dark:bg-ink-900 dark:text-ink-100 dark:hover:bg-ink-800"
      )}
      aria-label="Toggle dark mode"
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink-800 dark:bg-ink-100" />
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
