import { SeedButton } from "@/components/admin/SeedButton";
import { listEnquiries } from "@/lib/data/admin";
import { getVehicles } from "@/lib/data/vehicles";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const configured = isSupabaseConfigured();
  let enquiryCount = 0;
  let newCount = 0;
  if (configured) {
    try {
      const enquiries = await listEnquiries();
      enquiryCount = enquiries.length;
      newCount = enquiries.filter((e) => e.status === "new").length;
    } catch {
      enquiryCount = -1;
    }
  }
  const vehicles = await getVehicles();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl">House console</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
        Review incoming briefs and keep the collection current. Public forms write
        to Supabase. Use sync to push the curated multi-brand catalog.
      </p>

      {!configured ? (
        <p className="mt-8 border border-gold/40 px-6 py-4 text-sm text-silver">
          Add <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> and{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> in <code>.env.local</code>, then
          run <code>supabase/schema.sql</code> in the SQL Editor.
        </p>
      ) : null}

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Stat label="Vehicles" value={String(vehicles.length)} href="/admin/vehicles" />
        <Stat
          label="Enquiries"
          value={enquiryCount < 0 ? "—" : String(enquiryCount)}
          href="/admin/enquiries"
        />
        <Stat
          label="New"
          value={enquiryCount < 0 ? "—" : String(newCount)}
          href="/admin/enquiries"
        />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl">Catalog</h2>
        <p className="mt-3 mb-8 max-w-xl text-sm text-muted">
          Pushes verified inventory — exotics, luxury SUVs, performance cars and
          bespoke programmes — into Supabase.
        </p>
        <SeedButton />
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link href={href} className="border border-white/10 p-8 hover:border-gold/40">
      <p className="text-[11px] tracking-[0.22em] text-silver uppercase">{label}</p>
      <p className="mt-4 font-display text-4xl">{value}</p>
    </Link>
  );
}
