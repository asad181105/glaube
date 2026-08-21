"use client";

import { usePathname } from "next/navigation";
import { AdminNav } from "./AdminNav";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
