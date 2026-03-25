// POST /api/v1/ai/surprise-me
// Returns 3 items — one each for Today, This Week, This Month.

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";
import { getLatestSKG } from "@/lib/skg";
import { surpriseMeThree } from "@/lib/ai";

export async function POST() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const [items, skg] = await Promise.all([
    db.bucketListItem.findMany({
      where: { userId: user.id, status: { in: ["todo", "ongoing"] } },
      select: { id: true, title: true },
    }),
    getLatestSKG(user.id),
  ]);

  if (!skg || items.length === 0) {
    return NextResponse.json({ data: null });
  }

  const result = await surpriseMeThree(items, skg);
  return NextResponse.json({ data: result });
}
