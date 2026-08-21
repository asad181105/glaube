import { NextResponse } from "next/server";
import { createCustomBuildRequest } from "@/lib/data/submissions";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const errors = validateContact(body);
    if (!body.vehicle?.trim()) errors.vehicle = "Required";
    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    await createCustomBuildRequest({
      name: body.name,
      phone: body.phone,
      email: body.email,
      vehicle: body.vehicle,
      modificationRequired: body.modificationRequired ?? "",
      budget: body.budget ?? "",
      description: body.description ?? "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
