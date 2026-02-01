import CruiseCard from "@/components/CruiseCard";
import { getCruises } from "@/lib/content";

export default function CruisesPage() {
  const cruises = getCruises();

  return (
    <div className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Cherry Blossom Cruises
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our handcrafted spring 2026 voyages through Japan&apos;s most
            stunning sakura destinations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cruises.map((cruise) => (
            <CruiseCard key={cruise.slug} cruise={cruise} />
          ))}
        </div>
      </div>
    </div>
  );
}
