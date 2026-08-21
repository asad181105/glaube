import { NextResponse } from "next/server";
import { createSourcingRequest } from "@/lib/data/submissions";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const errors = validateContact(body);
    if (!body.vehicleBrand?.trim()) errors.vehicleBrand = "Required";
    if (!body.vehicleModel?.trim()) errors.vehicleModel = "Required";
    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    await createSourcingRequest({
      name: body.name,
      phone: body.phone,
      email: body.email,
      vehicleBrand: body.vehicleBrand,
      vehicleModel: body.vehicleModel,
      preferredYear: body.preferredYear ?? "",
      budgetRange: body.budgetRange ?? "",
      preferredMarket: body.preferredMarket ?? "",
      condition: body.condition === "New" ? "New" : "Pre-Owned",
      additionalRequirements: body.additionalRequirements ?? "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
