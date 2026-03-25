import { auth } from "@/auth";
import { db } from "@/lib/db/client";
import { NextResponse } from "next/server";

// Threshold: only update last_active if it's been more than 30 minutes
const LAST_ACTIVE_THROTTLE_MS = 30 * 60 * 1000;

export async function getAuthUser() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const userId = session.user.id;

  // Throttled last_active update
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, onboardingComplete: true, lastActive: true },
  });

  if (!user) return null;

  const now = new Date();
  if (!user.lastActive || now.getTime() - user.lastActive.getTime() > LAST_ACTIVE_THROTTLE_MS) {
    await db.user.update({
      where: { id: userId },
      data: { lastActive: now },
    });
  }

  return user;
}

// Use in API routes — returns { user } or a 401 Response
export async function requireAuth(): Promise<
  { user: { id: string; email: string; onboardingComplete: boolean }; errorResponse: null } |
  { user: null; errorResponse: NextResponse }
> {
  const user = await getAuthUser();
  if (!user) {
    return {
      user: null,
      errorResponse: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { user, errorResponse: null };
}
