import Link from "next/link";

const MESSAGES: Record<string, string> = {
  Configuration: "There's a server configuration issue. Please try again later.",
  AccessDenied: "Access was denied. Please try a different sign-in method.",
  Verification: "The sign-in link has expired or already been used. Request a new one.",
  Default: "Something went wrong during sign in. Please try again.",
};

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = MESSAGES[error ?? "Default"] ?? MESSAGES.Default;

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-5">
      <div className="max-w-sm w-full text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto">
          <span className="text-2xl">⚠</span>
        </div>
        <h1 className="font-serif text-2xl text-charcoal">Sign-in failed</h1>
        <p className="text-stone leading-relaxed">{message}</p>
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center px-6 py-3 bg-amber text-white rounded-[var(--radius-btn)] font-medium hover:bg-terracotta transition-colors"
        >
          Try again
        </Link>
      </div>
    </div>
  );
}
