"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: "en" | "ja";
  nav: {
    home: string;
    cruises?: string;
    products?: string;
    contact: string;
  };
}

export default function Header({ locale, nav }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEn = locale === "en";

  const headerBg = isEn
    ? "bg-white/90 backdrop-blur-sm border-b border-gray-200"
    : "bg-navy-900/95 backdrop-blur-sm border-b border-gold-500/30";

  const logoColor = isEn ? "text-brand-600" : "text-gold-400";
  const linkColor = isEn
    ? "text-gray-700 hover:text-brand-600"
    : "text-gray-300 hover:text-gold-400";

  const prefix = `/${locale}`;

  const navItems = [
    { label: nav.home, href: prefix },
    ...(nav.cruises ? [{ label: nav.cruises, href: `${prefix}/cruises` }] : []),
    ...(nav.products ? [{ label: nav.products, href: `${prefix}/products` }] : []),
    { label: nav.contact, href: `${prefix}/contact` },
  ];

  return (
    <header className={`sticky top-0 z-50 ${headerBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={prefix} className={`text-xl font-bold ${logoColor}`}>
          Anchor Infinite
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${linkColor}`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher theme={isEn ? "brand" : "premium"} />
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${linkColor}`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className={`border-t px-4 pb-4 md:hidden ${isEn ? "border-gray-200 bg-white" : "border-gold-500/30 bg-navy-900"}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-3 text-sm font-medium transition-colors ${linkColor}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <LanguageSwitcher theme={isEn ? "brand" : "premium"} />
          </div>
        </nav>
      )}
    </header>
  );
}
