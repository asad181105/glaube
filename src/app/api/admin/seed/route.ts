import { NextResponse } from "next/server";
import { seedCatalog } from "@/lib/data/admin";

export async function POST() {
  try {
    const count = await seedCatalog();
    return NextResponse.json({ ok: true, count });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed" },
      { status: 500 },
    );
  }
}
