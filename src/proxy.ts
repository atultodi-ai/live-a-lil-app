import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that don't require auth
const PUBLIC_ROUTES = [
  "/auth/signin",
  "/auth/verify",
  "/auth/error",
  "/api/auth",
  "/api/v1/beta-signup",
];

export default auth(async (req: NextRequest & { auth: { user?: { id?: string; onboardingComplete?: boolean } } | null }) => {
  const { pathname } = req.nextUrl;

  // Always allow static files
  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  // Allow auth routes and public API routes
  const isPublic = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));
  if (isPublic) return NextResponse.next();

  // Landing page — let unauthenticated users through, redirect authed users
  if (pathname === "/") {
    const session = req.auth;
    if (!session?.user) return NextResponse.next();
    if (session.user.onboardingComplete) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  const session = req.auth;

  // Not logged in → redirect to sign in
  if (!session?.user) {
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Logged in but hasn't completed onboarding → redirect to /onboarding
  // (skip if already going to onboarding, or if it's an API route)
  if (
    !session.user.onboardingComplete &&
    !pathname.startsWith("/onboarding") &&
    !pathname.startsWith("/api/")
  ) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  return NextResponse.next();
});

export const config = {
  // Match all routes except static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
