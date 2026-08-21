import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/types";

const statusLabel: Record<Vehicle["status"], string> = {
  AVAILABLE: "Available",
  COMING_SOON: "Coming Soon",
  ON_REQUEST: "Available on Request",
  SOLD: "Sold",
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const cover = vehicle.images[0];

  return (
    <Link href={`/inventory/${vehicle.slug}`} className="group block">
      <article className="border border-white/10 bg-graphite">
        <div className="relative aspect-[16/10] overflow-hidden">
          {cover ? (
            <Image
              src={cover.url}
              alt={cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.24em] text-gold uppercase">
            {statusLabel[vehicle.status]}
          </span>
        </div>
        <div className="p-6">
          <p className="text-[11px] tracking-[0.28em] text-silver uppercase">
            {vehicle.brand}
          </p>
          <h3 className="mt-2 text-2xl">{vehicle.model}</h3>
          <div className="mt-4 flex items-center justify-between text-xs tracking-[0.16em] text-muted uppercase">
            <span>{vehicle.year}</span>
            <span>{vehicle.location}</span>
          </div>
          <p className="mt-5 text-[11px] tracking-[0.22em] text-foreground uppercase transition-colors group-hover:text-gold">
            View Details
          </p>
        </div>
      </article>
    </Link>
  );
}
