// PATCH /api/v1/items/[id]/archive — archive an item

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";

export async function PATCH(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { id } = await params;
  const item = await db.bucketListItem.findUnique({ where: { id } });

  if (!item || item.userId !== user.id) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  const updated = await db.bucketListItem.update({
    where: { id },
    data: { status: "archived" },
  });

  return NextResponse.json({ data: updated });
}
