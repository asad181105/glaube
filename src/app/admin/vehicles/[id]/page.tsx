import { notFound } from "next/navigation";
import { VehicleEditor } from "@/components/admin/VehicleEditor";
import { getVehicles } from "@/lib/data/vehicles";

export const dynamic = "force-dynamic";

export default async function EditVehiclePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicles = await getVehicles();
  const vehicle = vehicles.find((item) => item.id === id);
  if (!vehicle) notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-12 text-4xl">
        {vehicle.brand} {vehicle.model}
      </h1>
      <VehicleEditor vehicle={vehicle} />
    </section>
  );
}
