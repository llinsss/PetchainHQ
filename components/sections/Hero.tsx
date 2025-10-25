import Link from "next/link";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-ink-50/60">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1>Own your pet's medical record</h1>
          <p className="mt-4 text-lg text-ink-700 max-w-prose">
            PetChain stores tamper-proof medical history on StarkNet. Share securely with vets and responders via scannable tags.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard"><Button>Get started</Button></Link>
            <Link href="/p/demo"><Button variant="secondary">Preview a tag</Button></Link>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-ink-600">
            <span className="badge">ZKP privacy</span>
            <span className="badge">Always-available</span>
            <span className="badge">Controlled access</span>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <div className="card p-6 w-full max-w-md">
            <h3>Fast onboarding</h3>
            <ol className="mt-3 space-y-2 text-sm text-ink-700 list-decimal list-inside">
              <li>Create your account</li>
              <li>Register your pet</li>
              <li>Generate and print your tag</li>
            </ol>
            <div className="mt-6 rounded-lg border border-ink-100 p-4">
              <p className="text-xs text-ink-500">Vet-ready integration</p>
              <p className="text-sm text-ink-700">Works with existing clinic software. Share via link or scan, no install required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
