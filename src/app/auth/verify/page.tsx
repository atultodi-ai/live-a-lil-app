import { Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-5">
      <div className="max-w-sm w-full text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-amber/15 flex items-center justify-center mx-auto">
          <Mail size={24} className="text-amber" />
        </div>
        <h1 className="font-serif text-2xl text-charcoal">Check your email</h1>
        <p className="text-stone leading-relaxed">
          A sign-in link is on its way. Click it to access your account —
          it expires in 15 minutes and can only be used once.
        </p>
        <p className="text-sm text-stone-light">
          Wrong email?{" "}
          <Link href="/auth/signin" className="text-amber underline underline-offset-2 hover:text-terracotta">
            Try again
          </Link>
        </p>
      </div>
    </div>
  );
}
