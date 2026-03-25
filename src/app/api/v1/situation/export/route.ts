// GET /api/v1/situation/export — full SKG as downloadable JSON

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKGRaw } from "@/lib/skg";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const situation = await getLatestSKGRaw(user.id);
  if (!situation) {
    return NextResponse.json({ error: "No situation data found." }, { status: 404 });
  }

  const filename = `live-a-lil-situation-${new Date().toISOString().split("T")[0]}.json`;

  return new NextResponse(JSON.stringify(situation.data, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
