import Link from "next/link";
import Image from "next/image";
import { Cruise } from "@/lib/types";

const cruiseImages: Record<string, string> = {
  "kochi-iwakuni": "/images/kochi-castle.jpg",
  "suruga-weekend": "/images/AsukaIII.jpg",
};

export default function CruiseCard({ cruise }: { cruise: Cruise }) {
  return (
    <Link
      href={`/en/cruises/${cruise.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={cruiseImages[cruise.slug] || "/images/AsukaIII.jpg"}
          alt={cruise.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-xs font-medium tracking-wide text-sakura-500 uppercase">
          {cruise.duration}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-sakura-600 transition-colors">
          {cruise.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{cruise.subtitle}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-sakura-600">{cruise.price}</span>
          <span className="text-xs text-sakura-500 font-medium group-hover:translate-x-1 transition-transform">
            View Details →
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {cruise.route.map((stop, i) => (
            <span
              key={i}
              className="rounded-full bg-sakura-50 px-2.5 py-0.5 text-xs text-sakura-600"
            >
              {stop}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
