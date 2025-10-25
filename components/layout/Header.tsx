"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotificationBell } from "./NotificationBell";
import { ThemeToggle } from "./ThemeToggle";
import clsx from "clsx";
import type { Route } from "next";
import { useAuth } from "../auth/AuthProvider";

export function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const nav: { href: Route; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-100 dark:bg-ink-900/70 dark:border-ink-800">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink-900 dark:text-ink-100">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white">PC</span>
          <span>PetChain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white",
                pathname === n.href && "text-ink-900 dark:text-white font-medium"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <NotificationBell />
          <ThemeToggle />
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-ink-600 dark:text-ink-300">
                {user.role === "org" ? user.orgName ?? "Organization" : user.name ?? "Pet owner"}
              </span>
              {user.role === "org" ? (
                <Link href="/org" className="btn btn-primary h-9 px-4">Open app</Link>
              ) : (
                <Link href="/dashboard" className="btn btn-primary h-9 px-4">Open app</Link>
              )}
              <button onClick={logout} className="btn btn-secondary h-9 px-3">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-secondary h-9 px-4">Login</Link>
              <Link href="/login" className="btn btn-primary h-9 px-4">Get started</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
