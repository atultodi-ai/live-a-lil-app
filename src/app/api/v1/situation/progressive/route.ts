// PATCH /api/v1/situation/progressive — update progressive SKG fields

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAuth } from "@/lib/auth/helpers";
import { updateSKGProgressive } from "@/lib/skg";

const schema = z.object({
  economic_capacity: z.enum(["tight", "comfortable", "abundant"]).optional(),
  family_status: z.enum(["single", "partnered", "married", "divorced", "widowed"]).optional(),
  health_mobility: z.enum(["full", "limited", "restricted"]).optional(),
  occupation_type: z.enum(["employed", "self_employed", "freelance", "student", "retired", "unemployed"]).optional(),
  // Accept "true"/"false" strings from the UI (option values are always strings)
  children: z.preprocess((v) => v === "true" ? true : v === "false" ? false : v, z.boolean()).optional(),
  education_level: z.enum(["high_school", "undergraduate", "graduate", "doctoral", "other"]).optional(),
  languages: z.array(z.string()).optional(),
  source: z.enum(["user_stated", "inferred", "updated"]).optional(),
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

  const { source, ...fields } = parsed.data;
  const updated = await updateSKGProgressive(user.id, fields, source ?? "user_stated");
  return NextResponse.json({ data: updated });
}
