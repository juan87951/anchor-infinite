import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { getProducts, getSiteContent } from "@/lib/content";

export default function JapaneseHome() {
  const content = getSiteContent("ja");
  const products = getProducts();
  const suite = products[0];

  return (
    <>
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        ctaHref="/ja/products"
        theme="premium"
      />

      {/* Featured Product */}
      <section className="bg-navy-950 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              プレミアムスイートオーナーシップ
            </h2>
            <p className="mt-3 text-gray-400">
              厳選された30室限定のオーナーシッププログラム
            </p>
          </div>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/アトリウム.jpg"
                alt="プレミアムスイート内装"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{suite.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                {suite.description}
              </p>
              <div className="mt-6 space-y-3">
                {suite.benefits.slice(0, 4).map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-400/30 text-xs text-gold-400">
                      ✓
                    </span>
                    <span className="text-sm text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/ja/products/suite-ownership"
                className="mt-8 inline-block rounded-sm border border-gold-400 px-6 py-3 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-navy-900"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="border-t border-gold-400/10 bg-navy-900 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            選ばれる理由
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "資産価値", desc: "譲渡・相続が可能な永年利用権" },
              { title: "世界品質", desc: "最高水準のホスピタリティとサービス" },
              { title: "限定30室", desc: "厳選されたオーナー様のみの特別空間" },
              { title: "全航路対応", desc: "世界中の航路でご利用いただけます" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-gold-400/20 p-6 text-center"
              >
                <h3 className="text-lg font-bold text-gold-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ship gallery */}
      <section className="border-t border-gold-400/10 bg-navy-950 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            船内施設のご紹介
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/Restraurants.jpg" alt="レストラン" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white">レストラン</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/Asuka露天風呂.jpg" alt="露天風呂" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white">露天風呂</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image src="/images/飛鳥船内劇場.jpg" alt="船内劇場" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white">船内劇場</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold-400/10 bg-navy-950 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">
            まずはお気軽にご相談ください
          </h2>
          <p className="mt-3 text-gray-400">
            専任コンシェルジュが、お客様に最適なプランをご提案いたします。
          </p>
          <Link
            href="/ja/contact"
            className="mt-8 inline-block rounded-sm border border-gold-400 bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-500"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
