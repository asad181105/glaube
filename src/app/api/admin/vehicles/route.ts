import { NextResponse } from "next/server";
import { upsertVehicle } from "@/lib/data/admin";
import { getVehicles } from "@/lib/data/vehicles";
import type { Vehicle } from "@/lib/types";

export async function GET() {
  const vehicles = await getVehicles();
  return NextResponse.json({ ok: true, vehicles });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const vehicle = body.vehicle as Vehicle;
    const imageUrls = (body.imageUrls as string[]) ?? [];
    await upsertVehicle(vehicle, imageUrls);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed" },
      { status: 500 },
    );
  }
}
