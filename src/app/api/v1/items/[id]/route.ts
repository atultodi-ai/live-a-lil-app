// PATCH  /api/v1/items/[id] — update item fields
// DELETE /api/v1/items/[id] — hard delete

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";

async function getOwnedItem(userId: string, id: string) {
  const item = await db.bucketListItem.findUnique({ where: { id } });
  if (!item || item.userId !== userId) return null;
  return item;
}

// ─── PATCH ───────────────────────────────────

const updateSchema = z.object({
  title: z.string().min(1).max(300).optional(),
  description: z.string().max(1000).nullable().optional(),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  status: z.enum(["todo", "ongoing", "done", "archived"]).optional(),
  imageUrl: z.string().url().nullable().optional(),
  doabilityScore: z.number().int().min(0).max(100).nullable().optional(),
  aiReasoning: z.string().nullable().optional(),
  type: z.enum(["travel", "skill", "experience", "achievement", "habit", "relationship", "other"]).nullable().optional(),
  costEstimate: z.enum(["free", "low", "moderate", "high", "very_high"]).nullable().optional(),
  effortLevel: z.enum(["minimal", "low", "moderate", "high", "sustained"]).nullable().optional(),
  timeHorizon: z.enum(["immediate", "short_term", "long_term"]).nullable().optional(),
  bestSeason: z.string().nullable().optional(),
  ageWindowMin: z.number().int().nullable().optional(),
  ageWindowMax: z.number().int().nullable().optional(),
  constraints: z.array(z.string()).optional(),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { id } = await params;
  const item = await getOwnedItem(user.id, id);
  if (!item) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const updated = await db.bucketListItem.update({
    where: { id },
    data: parsed.data,
  });

  return NextResponse.json({ data: updated });
}

// ─── DELETE ──────────────────────────────────

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const { id } = await params;
  const item = await getOwnedItem(user.id, id);
  if (!item) {
    return NextResponse.json({ error: "Item not found." }, { status: 404 });
  }

  await db.bucketListItem.delete({ where: { id } });
  return NextResponse.json({ data: { ok: true } });
}
