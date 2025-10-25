import { Card } from "../ui/Card";

const features = [
  {
    title: "Scannable pet tags",
    desc: "Unique QR codes link to medical history. Customize owner message.",
  },
  {
    title: "Always-available records",
    desc: "Tamper-proof data on StarkNet with clean, readable presentation.",
  },
  {
    title: "Controlled access",
    desc: "Share specific details or grant full access with simple controls.",
  },
  {
    title: "Smart notifications",
    desc: "Automatic reminders for vaccinations and check-ups.",
  },
  {
    title: "Vet-ready integration",
    desc: "Seamless with clinic software, no app install needed.",
  },
  {
    title: "Offline mode",
    desc: "Essential info available without internet.",
  },
];

export function FeatureTiles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="p-6">
            <h3>{f.title}</h3>
            <p className="mt-2 text-sm text-ink-700">{f.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
