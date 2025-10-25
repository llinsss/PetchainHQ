"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, UserRole } from "./AuthProvider";

export default function RequireAuth({ role, children }: { role: UserRole | "any"; children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login?redirected=1" as any);
      return;
    }
    if (role !== "any" && user.role !== role) {
      // Send to unauthorized page with required role in query
      router.replace((`/unauthorized?required=${role}`) as any);
    }
  }, [user, role, router]);

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="card p-6">
          <p className="text-sm text-ink-600">Redirecting to login…</p>
        </div>
      </div>
    );
  }
  if (role !== "any" && user.role !== role) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="card p-6">
          <p className="text-sm text-ink-600">Checking permissions…</p>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
