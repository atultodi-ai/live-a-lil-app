// GET /api/v1/ai/nudge
// Returns the AI nudge card for the dashboard. Cached 24h per SKG version.

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { getLatestSKG, getLatestSKGRaw } from "@/lib/skg";
import { generateNudge } from "@/lib/ai";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const [topItems, skg, skgRaw] = await Promise.all([
    db.bucketListItem.findMany({
      where: { userId: user.id, status: { in: ["todo", "ongoing"] } },
      orderBy: { doabilityScore: "desc" },
      take: 5,
      select: { id: true, title: true, doabilityScore: true },
    }),
    getLatestSKG(user.id),
    getLatestSKGRaw(user.id),
  ]);

  if (!skg || !skgRaw || topItems.length === 0) {
    return NextResponse.json({ data: null });
  }

  const nudge = await generateNudge(user.id, skgRaw.version, topItems, skg);
  return NextResponse.json({ data: nudge });
}
