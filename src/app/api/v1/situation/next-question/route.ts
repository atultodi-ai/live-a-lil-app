// GET /api/v1/situation/next-question — next progressive learning question

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { getLatestSKG, getNextQuestion } from "@/lib/skg";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const skg = await getLatestSKG(user.id);
  if (!skg) {
    return NextResponse.json({ data: null });
  }

  const question = getNextQuestion(skg);
  return NextResponse.json({ data: question });
}
