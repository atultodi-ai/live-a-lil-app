// GET /api/v1/situation/completeness — returns completeness score + missing fields

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKG, getSKGCompleteness } from "@/lib/skg";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const skg = await getLatestSKG(user.id);
  if (!skg) {
    return NextResponse.json({ data: { score: 0, missingFields: [] } });
  }

  return NextResponse.json({ data: getSKGCompleteness(skg) });
}
