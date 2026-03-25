// GET /api/v1/situation/compressed — returns compressed text summary for AI calls

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKG, compressSKG } from "@/lib/skg";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const skg = await getLatestSKG(user.id);
  if (!skg) {
    return NextResponse.json({ error: "No situation data found." }, { status: 404 });
  }

  return NextResponse.json({ data: compressSKG(skg) });
}
