"use client";
import { SessionProvider } from "next-auth/react";

// Making it a client component....

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
