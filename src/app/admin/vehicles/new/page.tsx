import { VehicleEditor } from "@/components/admin/VehicleEditor";

export default function NewVehiclePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-12 text-4xl">Add vehicle</h1>
      <VehicleEditor />
    </section>
  );
}
