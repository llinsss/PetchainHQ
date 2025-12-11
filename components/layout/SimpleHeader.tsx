import Link from "next/link";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink-900">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white">🐾</span>
          <span>PetChain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-ink-600 hover:text-ink-900">Home</Link>
          <Link href="/dashboard" className="text-ink-600 hover:text-ink-900">Dashboard</Link>
          <Link href="/features" className="text-ink-600 hover:text-ink-900">Features</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900">Login</Link>
          <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</Link>
        </div>
      </div>
    </header>
  );
}