import { NextResponse } from "next/server";
import { listEnquiries, updateEnquiry } from "@/lib/data/admin";
import type { EnquiryRecord, EnquiryStatus } from "@/lib/data/mappers";

export async function GET() {
  try {
    const enquiries = await listEnquiries();
    return NextResponse.json({ ok: true, enquiries });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    await updateEnquiry(
      body.kind as EnquiryRecord["kind"],
      String(body.id),
      {
        status: body.status as EnquiryStatus | undefined,
        notes: body.notes as string | undefined,
      },
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed" },
      { status: 500 },
    );
  }
}
