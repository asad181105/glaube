import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { VehicleGallery } from "@/components/VehicleGallery";
import { getVehicleBySlug, getVehicleSlugs } from "@/lib/data/vehicles";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getVehicleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  if (!vehicle) return {};
  return createMetadata({
    title: `${vehicle.brand} ${vehicle.model}`,
    description: vehicle.overview,
    path: `/inventory/${vehicle.slug}`,
  });
}

const statusLabel = {
  AVAILABLE: "Available",
  COMING_SOON: "Coming Soon",
  ON_REQUEST: "On Request",
  SOLD: "Sold",
} as const;

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const name = `${vehicle.brand} ${vehicle.model}`;
  const specs = [
    ["Engine", vehicle.engine],
    ["Transmission", vehicle.transmission],
    ["Power", vehicle.power],
    ["Drivetrain", vehicle.drivetrain],
    ["Exterior", vehicle.exterior],
    ["Interior", vehicle.interior],
    ["Location", vehicle.location],
    ["Availability", statusLabel[vehicle.status]],
  ];

  return (
    <article className="pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
          {vehicle.brand}
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl">{vehicle.model}</h1>
        <p className="mt-4 text-sm tracking-[0.2em] text-muted uppercase">
          {vehicle.year} · {vehicle.type} · Price on Request
        </p>
        <div className="mt-10">
          <VehicleGallery images={vehicle.images} />
        </div>
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl">Vehicle Overview</h2>
            <p className="mt-6 text-base leading-8 text-muted">{vehicle.overview}</p>
            <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {specs.map(([k, v]) => (
                <div key={k} className="grid gap-2 py-5 md:grid-cols-3">
                  <dt className="text-[11px] tracking-[0.22em] text-silver uppercase">
                    {k}
                  </dt>
                  <dd className="md:col-span-2 text-sm leading-7">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="border border-white/10 bg-surface p-8">
            <h2 className="text-xl">Enquire About This Vehicle</h2>
            <p className="mt-3 mb-8 text-sm leading-7 text-muted">
              Share your details and we will follow up with availability and next
              steps.
            </p>
            <InquiryForm vehicleName={name} />
          </div>
        </div>
      </div>
    </article>
  );
}
