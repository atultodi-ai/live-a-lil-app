// PATCH /api/v1/situation/core — update core SKG fields (age, gender, location)

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { updateSKGCore } from "@/lib/skg";

const schema = z.object({
  age: z.number().int().min(1).max(120).optional(),
  gender: z.enum(["male", "female", "non_binary", "prefer_not_to_say"]).optional(),
  city: z.string().min(1).max(100).optional(),
  country: z.string().min(1).max(100).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export async function PATCH(req: Request) {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const updated = await updateSKGCore(user.id, parsed.data);
  return NextResponse.json({ data: updated });
}
