import Link from "next/link";
import Image from "next/image";
import { getProduct } from "@/lib/content";
import { notFound } from "next/navigation";

export default function SuiteOwnershipPage() {
  const product = getProduct("suite-ownership");
  if (!product) notFound();

  return (
    <div className="bg-navy-950">
      {/* Hero */}
      <div className="border-b border-gold-400/10 bg-gradient-to-br from-navy-900 to-navy-950 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/ja/products"
            className="mb-6 inline-block text-sm text-gold-400/70 hover:text-gold-400"
          >
            ← プロダクト一覧
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src="/images/アトリウム.jpg"
              alt="プレミアムスイート・パノラマビュー"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-8">
            <span className="rounded-sm border border-gold-400/30 px-3 py-1 text-xs tracking-wider text-gold-400 uppercase">
              Exclusive Program
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white">
              {product.title}
            </h1>
            <p className="mt-3 text-lg text-gray-400">{product.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Price */}
        <div className="rounded-sm border border-gold-400/30 bg-navy-900 p-8 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-gold-400 uppercase">
            オーナーシップ価格
          </h3>
          <p className="mt-3 text-3xl font-bold text-white">{product.price}</p>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">プログラム概要</h2>
          <p className="mt-4 leading-relaxed text-gray-400">
            {product.description}
          </p>
        </div>

        {/* Ship exterior */}
        <div className="mt-12">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src="/images/AsukaIII.jpg"
              alt="飛鳥III外観"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">施設・サービス</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-sm border border-gold-400/20 p-6"
              >
                <h3 className="text-lg font-bold text-gold-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">オーナー特典</h2>
          <ul className="mt-6 space-y-3">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-400/30 text-xs text-gold-400">
                  ✓
                </span>
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Points */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">選ばれる理由</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.marketingPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-sm border border-gold-400/10 bg-navy-900 p-4"
              >
                <span className="text-gold-400">★</span>
                <span className="text-sm text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">ギャラリー</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/アトリウム.jpg" alt="アトリウム" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/Restraurants.jpg" alt="専用ダイニング" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/Asuka露天風呂.jpg" alt="スパ施設" fill className="object-cover" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/飛鳥船内劇場.jpg" alt="船内劇場" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-sm border border-gold-400/30 bg-navy-900 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            オーナーシップについてのご相談
          </h2>
          <p className="mt-2 text-gray-400">
            専任コンシェルジュが、詳細なご案内をいたします。
          </p>
          <Link
            href="/ja/contact"
            className="mt-6 inline-block rounded-sm border border-gold-400 bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-500"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
