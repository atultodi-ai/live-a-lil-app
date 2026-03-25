// GET /api/v1/items/count — counts by status

import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/helpers";
import { db } from "@/lib/db/client";

export async function GET() {
  const { user, errorResponse } = await requireAuth();
  if (errorResponse) return errorResponse;

  const [todo, ongoing, done, archived] = await Promise.all([
    db.bucketListItem.count({ where: { userId: user.id, status: "todo" } }),
    db.bucketListItem.count({ where: { userId: user.id, status: "ongoing" } }),
    db.bucketListItem.count({ where: { userId: user.id, status: "done" } }),
    db.bucketListItem.count({ where: { userId: user.id, status: "archived" } }),
  ]);

  return NextResponse.json({
    data: {
      todo,
      ongoing,
      done,
      archived,
      active: todo + ongoing,
    },
  });
}
