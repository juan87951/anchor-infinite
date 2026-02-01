import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CruiseCard from "@/components/CruiseCard";
import { getCruises, getSiteContent } from "@/lib/content";

export default function EnglishHome() {
  const content = getSiteContent("en");
  const cruises = getCruises();

  return (
    <>
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        ctaHref="/en/cruises"
        theme="brand"
      />

      {/* Featured Cruises */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-sakura-100 px-3 py-1 text-xs font-medium tracking-wide text-sakura-600 uppercase">
              Featured Season
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Spring 2026 Cherry Blossom Voyages
            </h2>
            <p className="mt-3 text-gray-600">
              Handcrafted itineraries through Japan&apos;s finest sakura destinations
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {cruises.map((cruise) => (
              <CruiseCard key={cruise.slug} cruise={cruise} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Sail With Us
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Intimate Voyages",
                desc: "Small ships with 150–200 guests for a personal, uncrowded experience.",
              },
              {
                title: "Cultural Immersion",
                desc: "Expert-guided excursions, onboard workshops, and authentic Japanese cuisine.",
              },
              {
                title: "Seasonal Highlights",
                desc: "Carefully timed departures to coincide with Japan's most spectacular natural events.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Experience the Beauty
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/kochi-castle.jpg" alt="Kochi Castle with cherry blossoms" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/AsukaIII.jpg" alt="Cruise ship at sea" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/images/Restraurants.jpg" alt="Onboard restaurant dining" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Set Sail?
          </h2>
          <p className="mt-3 text-brand-100">
            Spaces are limited. Contact us to reserve your cabin.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-600 shadow-lg transition-all hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
