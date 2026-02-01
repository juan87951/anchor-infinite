import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/ja/products/${product.slug}`}
      className="group block overflow-hidden rounded-sm border border-gold-400/30 bg-navy-900 transition-all hover:border-gold-400/60 hover:shadow-lg hover:shadow-gold-400/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src="/images/アトリウム.jpg"
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{product.subtitle}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-gold-400">{product.price}</span>
          <span className="text-xs text-gold-400/70 font-medium group-hover:translate-x-1 transition-transform">
            詳細を見る →
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.marketingPoints.slice(0, 2).map((point, i) => (
            <span
              key={i}
              className="rounded-sm border border-gold-400/20 px-2.5 py-0.5 text-xs text-gold-400/80"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
