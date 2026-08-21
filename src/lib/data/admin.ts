import { catalog } from "@/lib/data/catalog";
import { vehicleToRow, type EnquiryRecord, type EnquiryStatus } from "@/lib/data/mappers";
import { createAdminClient } from "@/lib/supabase/client";
import type { Vehicle } from "@/lib/types";

function requireAdmin() {
  const client = createAdminClient();
  if (!client) throw new Error("Supabase is not configured.");
  return client;
}

export async function listEnquiries(): Promise<EnquiryRecord[]> {
  const supabase = requireAdmin();
  const [inquiries, sourcing, builds, vehicles] = await Promise.all([
    supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
    supabase.from("sourcing_requests").select("*").order("created_at", { ascending: false }),
    supabase.from("custom_build_requests").select("*").order("created_at", { ascending: false }),
    supabase.from("vehicle_requests").select("*").order("created_at", { ascending: false }),
  ]);

  const records: EnquiryRecord[] = [];

  for (const row of inquiries.data ?? []) {
    records.push({
      id: row.id,
      kind: "inquiry",
      name: row.name,
      phone: row.phone,
      email: row.email,
      summary: row.vehicle_name || row.service || "General enquiry",
      details: {
        Location: row.location,
        Service: row.service,
        Vehicle: row.vehicle_name,
        Message: row.message,
        Source: row.source,
      },
      status: row.status ?? "new",
      notes: row.notes ?? "",
      createdAt: row.created_at,
    });
  }
  for (const row of sourcing.data ?? []) {
    records.push({
      id: row.id,
      kind: "sourcing",
      name: row.name,
      phone: row.phone,
      email: row.email,
      summary: `${row.vehicle_brand ?? ""} ${row.vehicle_model ?? ""}`.trim() || "Sourcing",
      details: {
        Brand: row.vehicle_brand,
        Model: row.vehicle_model,
        Year: row.preferred_year,
        Budget: row.budget_range,
        Market: row.preferred_market,
        Condition: row.condition,
        Notes: row.additional_requirements,
      },
      status: row.status ?? "new",
      notes: row.notes ?? "",
      createdAt: row.created_at,
    });
  }
  for (const row of builds.data ?? []) {
    records.push({
      id: row.id,
      kind: "build",
      name: row.name,
      phone: row.phone,
      email: row.email,
      summary: row.vehicle || "Build request",
      details: {
        Vehicle: row.vehicle,
        Modification: row.modification_required,
        Budget: row.budget,
        Description: row.description,
      },
      status: row.status ?? "new",
      notes: row.notes ?? "",
      createdAt: row.created_at,
    });
  }
  for (const row of vehicles.data ?? []) {
    records.push({
      id: row.id,
      kind: "vehicle",
      name: row.name,
      phone: row.phone,
      email: row.email,
      summary: `${row.brand ?? ""} ${row.model ?? ""}`.trim() || "Vehicle request",
      details: {
        Brand: row.brand,
        Model: row.model,
        Type: row.vehicle_type,
        Budget: row.budget,
        Year: row.preferred_year,
        Market: row.preferred_market,
        Condition: row.condition,
        Customization: row.customization_required,
        Notes: row.additional_requirements,
      },
      status: row.status ?? "new",
      notes: row.notes ?? "",
      createdAt: row.created_at,
    });
  }

  return records.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

const tableByKind = {
  inquiry: "inquiries",
  sourcing: "sourcing_requests",
  build: "custom_build_requests",
  vehicle: "vehicle_requests",
} as const;

export async function updateEnquiry(
  kind: EnquiryRecord["kind"],
  id: string,
  patch: { status?: EnquiryStatus; notes?: string },
) {
  const supabase = requireAdmin();
  const { error } = await supabase.from(tableByKind[kind]).update(patch).eq("id", id);
  if (error) throw error;
}

export async function seedCatalog() {
  const supabase = requireAdmin();
  for (const vehicle of catalog) {
    const { error } = await supabase.from("vehicles").upsert(vehicleToRow(vehicle));
    if (error) throw error;
    await supabase.from("vehicle_images").delete().eq("vehicle_id", vehicle.id);
    if (vehicle.images.length) {
      const { error: imageError } = await supabase.from("vehicle_images").insert(
        vehicle.images.map((img) => ({
          id: img.id,
          vehicle_id: vehicle.id,
          url: img.url,
          alt: img.alt,
          sort_order: img.sortOrder,
        })),
      );
      if (imageError) throw imageError;
    }
  }
  return catalog.length;
}

export async function upsertVehicle(vehicle: Vehicle, imageUrls: string[]) {
  const supabase = requireAdmin();
  const { error } = await supabase.from("vehicles").upsert(vehicleToRow(vehicle));
  if (error) throw error;
  await supabase.from("vehicle_images").delete().eq("vehicle_id", vehicle.id);
  const images = imageUrls
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url, i) => ({
      id: `${vehicle.id}-${i}`,
      vehicle_id: vehicle.id,
      url,
      alt: `${vehicle.brand} ${vehicle.model}`,
      sort_order: i,
    }));
  if (images.length) {
    const { error: imageError } = await supabase.from("vehicle_images").insert(images);
    if (imageError) throw imageError;
  }
}

export async function deleteVehicle(id: string) {
  const supabase = requireAdmin();
  const { error } = await supabase.from("vehicles").delete().eq("id", id);
  if (error) throw error;
}
