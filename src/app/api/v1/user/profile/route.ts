// GET  /api/v1/user/profile — return name + image
// PATCH /api/v1/user/profile — update name

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";

const patchSchema = z.object({
  name: z.string().min(1).max(100),
});

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
    select: { id: true, name: true, image: true, email: true },
  });

  return NextResponse.json({ data: dbUser });
}

export async function PATCH(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const body = await req.json();
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const updated = await db.user.update({
    where: { id: user.id },
    data: { name: parsed.data.name },
    select: { id: true, name: true, image: true, email: true },
  });

  return NextResponse.json({ data: updated });
}
