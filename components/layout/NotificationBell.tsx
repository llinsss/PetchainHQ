"use client";
import { useState } from "react";

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const items = [
    { title: "Luna vaccination due in 2 weeks", time: "2h" },
    { title: "Milo deworm reminder", time: "3d" },
  ];
  return (
    <div className="relative">
      <button onClick={() => setOpen((v: boolean) => !v)} aria-expanded={open} aria-label="Notifications" className="btn btn-secondary h-9 w-9 p-0 relative">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden className="text-ink-800">
          <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1 7 7 0 0 1 6 7v3.382l1.447 2.894A1 1 0 0 1 19.553 18H4.447a1 1 0 0 1-.894-1.724L5 13.382V10a7 7 0 0 1 6-6.93A1 1 0 0 1 12 2Zm0 20a3 3 0 0 1-2.995-2.824L9 19h6a3 3 0 0 1-2.824 2.995L12 22Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 card p-3">
          <h4 className="text-sm font-medium">Smart notifications</h4>
          <ul className="mt-2 divide-y divide-ink-100">
            {items.map((n, i) => (
              <li key={i} className="py-2 text-sm text-ink-700 flex items-center justify-between">
                <span>{n.title}</span>
                <span className="text-ink-500">{n.time}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary w-full mt-2">View schedule</button>
        </div>
      )}
    </div>
  );
}
