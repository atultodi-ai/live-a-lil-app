// PATCH /api/v1/situation/contextual — update contextual SKG fields

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { updateSKGContextual } from "@/lib/skg";

const schema = z.object({
  current_season: z.enum(["spring", "summer", "autumn", "winter"]).optional(),
  upcoming_travel: z.string().max(200).nullable().optional(),
  major_life_events: z.array(z.string()).optional(),
  current_mood: z.enum(["low_energy", "motivated", "adventurous", "reflective"]).nullable().optional(),
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

  const updated = await updateSKGContextual(user.id, parsed.data);
  return NextResponse.json({ data: updated });
}
