import Link from "next/link";

interface FooterProps {
  locale: "en" | "ja";
  footer: {
    company: string;
    tagline: string;
    copyright: string;
    links: { label: string; href: string }[];
  };
}

export default function Footer({ locale, footer }: FooterProps) {
  const isEn = locale === "en";

  const bg = isEn
    ? "bg-gray-50 border-t border-gray-200 text-gray-700"
    : "bg-navy-950 border-t border-gold-500/20 text-gray-400";

  const headingColor = isEn ? "text-brand-600" : "text-gold-400";
  const linkHover = isEn ? "hover:text-brand-600" : "hover:text-gold-400";
  const dividerColor = isEn ? "border-gray-200" : "border-gold-500/10";

  return (
    <footer className={bg}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className={`text-lg font-bold ${headingColor}`}>{footer.company}</h3>
            <p className="mt-2 text-sm">{footer.tagline}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              {isEn ? "Quick Links" : "リンク"}
            </h4>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${linkHover}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              {isEn ? "Contact" : "お問い合わせ"}
            </h4>
            <p className="text-sm">info@anchor-infinite.com</p>
            <p className="mt-1 text-sm">+81-3-1234-5678</p>
          </div>
        </div>
        <div className={`mt-8 border-t ${dividerColor} pt-8 text-center text-sm opacity-70`}>
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
