import { PageHero } from "@/components/PageHero";
import { VehicleRequestForm } from "@/components/VehicleRequestForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request a Vehicle",
  description:
    "Tell Glaube Exotics what you are looking for. A concierge brief for sourcing, specification and next steps.",
  path: "/request",
});

export default function RequestPage() {
  return (
    <>
      <PageHero
        title="What are you looking for?"
        subtitle="A private brief. We review the requirement and return with considered options."
        image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <VehicleRequestForm />
      </section>
    </>
  );
}
