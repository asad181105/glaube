"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Vehicle } from "@/lib/types";

export function VehicleTable({ vehicles }: { vehicles: Vehicle[] }) {
  const router = useRouter();

  async function remove(id: string) {
    if (!confirm("Remove this vehicle from inventory?")) return;
    await fetch(`/api/admin/vehicles/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
              {vehicle.status.replaceAll("_", " ")}
            </p>
            <p className="mt-1 text-xl">
              {vehicle.brand} {vehicle.model}
            </p>
            <p className="text-sm text-muted">
              {vehicle.year} · {vehicle.type} · {vehicle.images.length} images
            </p>
          </div>
          <div className="flex gap-4 text-[11px] tracking-[0.18em] uppercase">
            <Link href={`/inventory/${vehicle.slug}`} className="text-silver hover:text-foreground">
              View
            </Link>
            <Link href={`/admin/vehicles/${vehicle.id}`} className="text-silver hover:text-foreground">
              Edit
            </Link>
            <button type="button" onClick={() => remove(vehicle.id)} className="text-silver hover:text-red-400">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
