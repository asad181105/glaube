import { InventoryGrid } from "@/components/InventoryGrid";
import { PageHero } from "@/components/PageHero";
import { getVehicles } from "@/lib/data/vehicles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "The Collection",
  description:
    "Exceptional vehicles. Carefully sourced. Explore the Glaube Exotics collection of luxury, performance and exotic automobiles.",
  path: "/inventory",
});

export default async function InventoryPage() {
  const vehicles = await getVehicles();

  return (
    <>
      <PageHero
        title="The Collection."
        subtitle="Exceptional vehicles. Carefully sourced."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <InventoryGrid vehicles={vehicles} />
      </section>
    </>
  );
}
