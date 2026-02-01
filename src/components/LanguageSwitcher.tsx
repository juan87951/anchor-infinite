"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ theme }: { theme: "brand" | "premium" }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const styles =
    theme === "brand"
      ? "border-gray-300 text-gray-600 hover:bg-gray-50"
      : "border-gold-400 text-gold-400 hover:bg-navy-800";

  const activeStyles =
    theme === "brand"
      ? "bg-brand-500 text-white border-brand-500"
      : "bg-gold-500 text-white border-gold-500";

  return (
    <div className="flex items-center gap-1 text-sm">
      <Link
        href="/en"
        className={`rounded-l-md border px-3 py-1.5 transition-colors ${
          isEnglish ? activeStyles : styles
        }`}
      >
        EN
      </Link>
      <Link
        href="/ja"
        className={`rounded-r-md border px-3 py-1.5 transition-colors ${
          !isEnglish ? activeStyles : styles
        }`}
      >
        JA
      </Link>
    </div>
  );
}
