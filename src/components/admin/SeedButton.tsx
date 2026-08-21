"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SeedButton() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function seed() {
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/admin/seed", { method: "POST" });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setMessage(data.error ?? "Seed failed. Check Supabase keys and schema.");
      return;
    }
    setMessage(`Synced ${data.count} vehicles to Supabase.`);
    router.refresh();
  }

  return (
    <div>
      <button
        type="button"
        onClick={seed}
        disabled={loading}
        className="border border-white/20 px-6 py-3 text-[11px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold"
      >
        {loading ? "Syncing…" : "Sync catalog to Supabase"}
      </button>
      {message ? <p className="mt-4 text-sm text-muted">{message}</p> : null}
    </div>
  );
}
