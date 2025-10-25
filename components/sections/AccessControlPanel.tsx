import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function AccessControlPanel() {
  const people = [
    { name: "Dr. Park", role: "Vet", access: "Full access" },
    { name: "Jane Doe", role: "Emergency", access: "Emergency-only" },
  ];

  return (
    <Card className="p-6">
      <h3>Controlled access</h3>
      <p className="mt-1 text-sm text-ink-600">Manage who can see your pet's data.</p>
      <ul className="mt-4 divide-y divide-ink-100">
        {people.map((p) => (
          <li key={p.name} className="py-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-ink-600">{p.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge">{p.access}</span>
              <Button variant="secondary">Edit</Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Button className="w-full">Add person</Button>
      </div>
    </Card>
  );
}
