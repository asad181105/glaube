import { catalog } from "@/lib/data/catalog";
import { mapVehicle } from "@/lib/data/mappers";
import { createAnonClient } from "@/lib/supabase/client";
import type { Vehicle } from "@/lib/types";

const SELECT = "*, vehicle_images(*)";

export const vehicles = catalog;

async function fromSupabase(): Promise<Vehicle[] | null> {
  const supabase = createAnonClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("vehicles")
    .select(SELECT)
    .order("brand");
  if (error || !data?.length) return null;
  return data.map((row) => mapVehicle(row as never));
}

export async function getVehicles(): Promise<Vehicle[]> {
  return (await fromSupabase()) ?? catalog;
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  const list = await getVehicles();
  const featured = list.filter((v) => v.featured);
  return featured.length ? featured : list.slice(0, 6);
}

export async function getVehicleBySlug(
  slug: string,
): Promise<Vehicle | undefined> {
  const supabase = createAnonClient();
  if (supabase) {
    const { data } = await supabase
      .from("vehicles")
      .select(SELECT)
      .eq("slug", slug)
      .maybeSingle();
    if (data) return mapVehicle(data as never);
  }
  return catalog.find((v) => v.slug === slug);
}

export async function getVehicleSlugs(): Promise<string[]> {
  const list = await getVehicles();
  return list.map((v) => v.slug);
}

export const vehicleTypes = [
  "SUV",
  "Sports Car",
  "Supercar",
  "Luxury Sedan",
  "Muscle Car",
  "Performance",
  "Custom Build",
] as const;
