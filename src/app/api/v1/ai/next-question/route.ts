// GET /api/v1/ai/next-question
// Returns the next progressive learning question (from static templates).

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKG } from "@/lib/skg";
import { generateQuestion } from "@/lib/ai";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const skg = await getLatestSKG(user.id);
  if (!skg) return NextResponse.json({ data: null });

  const question = generateQuestion(skg);
  return NextResponse.json({ data: question });
}
