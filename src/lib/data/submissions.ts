import type {
  CustomBuildRequest,
  Inquiry,
  SourcingRequest,
  VehicleRequest,
} from "@/lib/types";
import { createAnonClient } from "@/lib/supabase/client";

export async function createInquiry(data: Inquiry) {
  const supabase = createAnonClient();
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }
  const { error, data: row } = await supabase
    .from("inquiries")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      location: data.location ?? "",
      service: data.service ?? "",
      vehicle_name: data.vehicleName ?? "",
      message: data.message,
      source: data.source,
      status: "new",
    })
    .select("id")
    .single();
  if (error) throw error;
  return { ...data, id: row.id as string };
}

export async function createSourcingRequest(data: SourcingRequest) {
  const supabase = createAnonClient();
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error, data: row } = await supabase
    .from("sourcing_requests")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      vehicle_brand: data.vehicleBrand,
      vehicle_model: data.vehicleModel,
      preferred_year: data.preferredYear,
      budget_range: data.budgetRange,
      preferred_market: data.preferredMarket,
      condition: data.condition,
      additional_requirements: data.additionalRequirements,
      status: "new",
    })
    .select("id")
    .single();
  if (error) throw error;
  return { ...data, id: row.id as string };
}

export async function createCustomBuildRequest(data: CustomBuildRequest) {
  const supabase = createAnonClient();
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error, data: row } = await supabase
    .from("custom_build_requests")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      vehicle: data.vehicle,
      modification_required: data.modificationRequired,
      budget: data.budget,
      description: data.description,
      status: "new",
    })
    .select("id")
    .single();
  if (error) throw error;
  return { ...data, id: row.id as string };
}

export async function createVehicleRequest(data: VehicleRequest) {
  const supabase = createAnonClient();
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error, data: row } = await supabase
    .from("vehicle_requests")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      brand: data.brand,
      model: data.model,
      vehicle_type: data.vehicleType,
      budget: data.budget,
      preferred_year: data.preferredYear,
      preferred_market: data.preferredMarket,
      condition: data.condition,
      customization_required: data.customizationRequired,
      additional_requirements: data.additionalRequirements,
      status: "new",
    })
    .select("id")
    .single();
  if (error) throw error;
  return { ...data, id: row.id as string };
}
