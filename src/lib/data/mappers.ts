import type { Vehicle, VehicleImage } from "@/lib/types";

export type EnquiryStatus = "new" | "reviewing" | "contacted" | "closed";

export interface EnquiryRecord {
  id: string;
  kind: "inquiry" | "sourcing" | "build" | "vehicle";
  name: string;
  phone: string;
  email: string;
  summary: string;
  details: Record<string, string | undefined>;
  status: EnquiryStatus;
  notes: string;
  createdAt: string;
}

type VehicleRow = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  type: Vehicle["type"];
  location: string;
  origin_market: Vehicle["originMarket"];
  status: Vehicle["status"];
  overview: string;
  engine: string;
  transmission: string;
  power: string;
  drivetrain: string;
  exterior: string;
  interior: string;
  featured: boolean;
  price_on_request: boolean;
  vehicle_images?: {
    id: string;
    vehicle_id: string;
    url: string;
    alt: string;
    sort_order: number;
  }[];
};

export function mapVehicle(row: VehicleRow): Vehicle {
  const images: VehicleImage[] = (row.vehicle_images ?? [])
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((img) => ({
      id: img.id,
      vehicleId: img.vehicle_id,
      url: img.url,
      alt: img.alt,
      sortOrder: img.sort_order,
    }));

  return {
    id: row.id,
    slug: row.slug,
    brand: row.brand,
    model: row.model,
    year: row.year,
    type: row.type,
    location: row.location,
    originMarket: row.origin_market,
    status: row.status,
    overview: row.overview,
    engine: row.engine,
    transmission: row.transmission,
    power: row.power,
    drivetrain: row.drivetrain,
    exterior: row.exterior,
    interior: row.interior,
    featured: row.featured,
    priceOnRequest: row.price_on_request,
    images,
  };
}

export function vehicleToRow(vehicle: Vehicle) {
  return {
    id: vehicle.id,
    slug: vehicle.slug,
    brand: vehicle.brand,
    model: vehicle.model,
    year: vehicle.year,
    type: vehicle.type,
    location: vehicle.location,
    origin_market: vehicle.originMarket,
    status: vehicle.status,
    overview: vehicle.overview,
    engine: vehicle.engine,
    transmission: vehicle.transmission,
    power: vehicle.power,
    drivetrain: vehicle.drivetrain,
    exterior: vehicle.exterior,
    interior: vehicle.interior,
    featured: vehicle.featured,
    price_on_request: vehicle.priceOnRequest,
  };
}
