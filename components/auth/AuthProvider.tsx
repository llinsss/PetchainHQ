"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type UserRole = "org" | "owner";
export type User = {
  role: UserRole;
  name?: string;
  orgName?: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth:user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const login = (u: User) => {
    setUser(u);
    try {
      localStorage.setItem("auth:user", JSON.stringify(u));
    } catch {}
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("auth:user");
    } catch {}
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
