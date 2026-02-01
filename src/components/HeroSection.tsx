import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  theme: "brand" | "sakura" | "premium";
}

export default function HeroSection({ title, subtitle, cta, ctaHref, theme }: HeroSectionProps) {
  if (theme === "brand") {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-gray-50 px-4 py-24 sm:py-32">
        <div className="absolute top-10 right-20 h-24 w-24 rounded-full bg-brand-100 opacity-50 blur-2xl" />
        <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-brand-200 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-block rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-600 hover:shadow-xl"
            >
              {cta}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "sakura") {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-sakura-50 via-white to-sakura-100 px-4 py-24 sm:py-32">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-sakura-200 opacity-40 blur-2xl" />
        <div className="absolute right-20 bottom-10 h-32 w-32 rounded-full bg-sakura-300 opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-16 w-16 rounded-full bg-sakura-100 opacity-50 blur-xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-block rounded-full bg-sakura-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-sakura-600 hover:shadow-xl"
            >
              {cta}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-24 sm:py-32">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold-400 opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold-300 opacity-5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-gold-400/30 px-4 py-1 text-xs tracking-widest text-gold-400 uppercase">
          Exclusive Ownership Program
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
        <div className="mt-10">
          <Link
            href={ctaHref}
            className="inline-block rounded-sm border border-gold-400 bg-transparent px-8 py-3.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-navy-900"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
