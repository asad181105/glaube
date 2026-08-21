import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-[0.28em]">Glaube</p>
          <p className="mt-1 text-[11px] tracking-[0.4em] text-gold uppercase">
            Exotics
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            A premium automotive concierge for sourcing, importing, customizing
            and delivering exceptional vehicles. Source. Build. Deliver.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-silver uppercase">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-silver uppercase">
            Enquire
          </p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <Link href="/request" className="hover:text-foreground">
                Request a Vehicle
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/inventory" className="hover:text-foreground">
                Explore Collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Your gateway to the extraordinary.</p>
        </div>
      </div>
    </footer>
  );
}
