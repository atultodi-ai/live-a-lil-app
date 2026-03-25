// GET /api/v1/situation — returns current full SKG (enriched with derived fields)

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKG } from "@/lib/skg";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const skg = await getLatestSKG(user.id);

  if (!skg) {
    return NextResponse.json({ error: "No situation data found. Complete onboarding first." }, { status: 404 });
  }

  return NextResponse.json({ data: skg });
}
