"use client";

import { SessionProvider } from "next-auth/react";

type AuthProvidersProps = {
  children: React.ReactNode;
};

export default function AuthProviders({ children }: AuthProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
