import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid email." },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    await db.betaSignup.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We're having trouble right now. Try again in a moment." },
      { status: 500 }
    );
  }
}
