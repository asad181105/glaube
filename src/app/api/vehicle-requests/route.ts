import { NextResponse } from "next/server";
import { createVehicleRequest } from "@/lib/data/submissions";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const errors = validateContact(body);
    if (!body.brand?.trim()) errors.brand = "Required";
    if (!body.model?.trim()) errors.model = "Required";
    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    await createVehicleRequest({
      name: body.name,
      phone: body.phone,
      email: body.email,
      brand: body.brand,
      model: body.model,
      vehicleType: body.vehicleType ?? "",
      budget: body.budget ?? "",
      preferredYear: body.preferredYear ?? "",
      preferredMarket: body.preferredMarket ?? "",
      condition: body.condition === "New" ? "New" : "Pre-Owned",
      customizationRequired: body.customizationRequired === "Yes" ? "Yes" : "No",
      additionalRequirements: body.additionalRequirements ?? "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
