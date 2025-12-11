import Link from "next/link";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white">🐾</span>
          <span>PetChain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link href="/features" className="text-gray-300 hover:text-white">Features</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">Login</Link>
          <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</Link>
        </div>
      </div>
    </header>
  );
}