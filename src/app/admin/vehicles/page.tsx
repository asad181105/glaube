import Link from "next/link";
import { VehicleTable } from "@/components/admin/VehicleTable";
import { getVehicles } from "@/lib/data/vehicles";

export const dynamic = "force-dynamic";

export default async function AdminVehiclesPage() {
  const vehicles = await getVehicles();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl">Vehicles</h1>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Manage availability, copy and photography for the public collection.
          </p>
        </div>
        <Link
          href="/admin/vehicles/new"
          className="inline-flex bg-foreground px-6 py-3 text-[11px] tracking-[0.2em] text-background uppercase"
        >
          Add vehicle
        </Link>
      </div>
      <div className="mt-12">
        <VehicleTable vehicles={vehicles} />
      </div>
    </section>
  );
}
