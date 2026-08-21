import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/data/submissions";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const errors = validateContact(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    await createInquiry({
      name: body.name,
      phone: body.phone,
      email: body.email,
      location: body.location,
      service: body.service,
      vehicleName: body.vehicleName,
      message: body.message ?? "",
      source: body.source ?? "contact",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
