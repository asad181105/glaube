"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/enquiries", label: "Enquiries" },
  { href: "/admin/vehicles", label: "Vehicles" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/admin" className="font-display tracking-[0.22em]">
          Glaube Admin
        </Link>
        <nav className="flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href))
                  ? "text-gold"
                  : "text-silver hover:text-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link href="/" className="text-silver hover:text-foreground">
            Site
          </Link>
          <button type="button" onClick={logout} className="text-silver hover:text-foreground">
            Sign out
          </button>
        </nav>
      </div>
    </header>
  );
}
