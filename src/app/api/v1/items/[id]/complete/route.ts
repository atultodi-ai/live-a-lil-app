// PATCH /api/v1/items/[id]/complete — mark item as done

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";

const schema = z.object({
  completionNote: z.string().max(280).optional(),
  completionPhotoUrl: z.string().url().optional(),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { id } = await params;
  const item = await db.bucketListItem.findUnique({ where: { id } });

  if (!item || item.userId !== user.id) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  if (item.status === "done") {
    return NextResponse.json({ error: "Item is already completed." }, { status: 422 });
  }

  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const updated = await db.bucketListItem.update({
    where: { id },
    data: {
      status: "done",
      completedAt: new Date(),
      completionNote: parsed.data.completionNote,
      completionPhotoUrl: parsed.data.completionPhotoUrl,
    },
  });

  return NextResponse.json({ data: updated });
}
