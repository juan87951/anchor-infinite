import Link from "next/link";
import Image from "next/image";
import { getCruise } from "@/lib/content";
import { notFound } from "next/navigation";
import CheckoutButton from "@/components/CheckoutButton";

export default function KochiIwakuniPage() {
  const cruise = getCruise("kochi-iwakuni");
  if (!cruise) notFound();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sakura-50 to-sakura-100 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/en/cruises"
            className="mb-6 inline-block text-sm text-sakura-500 hover:text-sakura-600"
          >
            ← Back to Cruises
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/images/kochi-castle.jpg"
              alt="Kochi Castle surrounded by cherry blossoms"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-8">
            <span className="rounded-full bg-sakura-200 px-3 py-1 text-xs font-medium text-sakura-700">
              {cruise.duration}
            </span>
            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {cruise.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{cruise.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Route & Info */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-sakura-50 p-6">
            <h3 className="text-sm font-semibold text-sakura-600 uppercase">Dates</h3>
            <p className="mt-2 text-gray-900">{cruise.dates}</p>
          </div>
          <div className="rounded-2xl bg-sakura-50 p-6">
            <h3 className="text-sm font-semibold text-sakura-600 uppercase">Route</h3>
            <p className="mt-2 text-gray-900">{cruise.route.join(" → ")}</p>
          </div>
          <div className="rounded-2xl bg-sakura-50 p-6">
            <h3 className="text-sm font-semibold text-sakura-600 uppercase">Price</h3>
            <p className="mt-2 text-gray-900">{cruise.price}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">About This Voyage</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{cruise.description}</p>
        </div>

        {/* Ship image */}
        <div className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/AsukaIII.jpg"
              alt="Cruise ship"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Highlights</h2>
          <ul className="mt-4 space-y-3">
            {cruise.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sakura-100 text-sm text-sakura-500">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>
          <div className="mt-6 space-y-6">
            {cruise.itinerary.map((day) => (
              <div
                key={day.day}
                className="rounded-2xl border border-sakura-200 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-sakura-500 px-3 py-1 text-xs font-bold text-white">
                    {day.day}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {day.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-600">{day.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Points */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">What&apos;s Included</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cruise.marketingPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-sakura-50 p-4"
              >
                <span className="text-sakura-500">★</span>
                <span className="text-sm text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dining image */}
        <div className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/Restraurants.jpg"
              alt="Onboard restaurant dining"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-sakura-500 to-sakura-600 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Book This Voyage?
          </h2>
          <p className="mt-2 text-sakura-100">
            Secure your spot now or contact us for more information.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton slug="kochi-iwakuni" />
            <Link
              href="/en/contact"
              className="inline-block rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact for Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
