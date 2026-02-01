import Link from "next/link";

export default function RootPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Anchor Infinite
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Premium cruise experiences across Japan
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="/en"
            className="group rounded-2xl border border-sakura-200 bg-white p-8 shadow-sm transition-all hover:border-sakura-400 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">🌸</div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-sakura-600">
              English
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Cherry blossom cruise packages for an unforgettable Japan experience
            </p>
          </Link>

          <Link
            href="/ja"
            className="group rounded-2xl border border-gold-400/30 bg-navy-900 p-8 shadow-sm transition-all hover:border-gold-400/60 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">⚓</div>
            <h2 className="text-xl font-bold text-white group-hover:text-gold-400">
              日本語
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              プレミアムスイートオーナーシップのご案内
            </p>
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Select your preferred language to continue
        </p>
      </div>
    </div>
  );
}
