import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/content";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="bg-navy-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">プロダクト</h1>
          <p className="mt-4 text-lg text-gray-400">
            Anchor
            Infiniteが提供する、特別なオーナーシッププログラムをご紹介します。
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
