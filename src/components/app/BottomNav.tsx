"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, BookOpen, User } from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "My List", icon: Compass },
  { href: "/journey", label: "Journey", icon: BookOpen },
  { href: "/settings", label: "Me", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone/15 safe-area-bottom">
      <div className="flex max-w-lg mx-auto">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 text-xs font-medium transition-colors ${
                isActive ? "text-amber" : "text-stone hover:text-charcoal"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.75}
                className="transition-all"
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
