import ContactForm from "@/components/ContactForm";

export default function JapaneseContactPage() {
  const interests = [
    { value: "suite-ownership", label: "プレミアムスイートオーナーシップ" },
    { value: "general", label: "その他のお問い合わせ" },
  ];

  return (
    <div className="bg-navy-950 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">お問い合わせ</h1>
          <p className="mt-4 text-gray-400">
            プレミアムスイートオーナーシップに関するご質問やご相談は、下記フォームよりお気軽にお問い合わせください。専任スタッフが2営業日以内にご連絡いたします。
          </p>
        </div>

        <div className="mt-12">
          <ContactForm locale="ja" interests={interests} />
        </div>

        <div className="mt-12 rounded-sm border border-gold-400/20 bg-navy-900 p-8 text-center">
          <h3 className="font-bold text-white">直接のご連絡はこちら</h3>
          <p className="mt-2 text-sm text-gray-400">
            メール: info@anchor-infinite.com
          </p>
          <p className="text-sm text-gray-400">電話: +81-3-1234-5678</p>
        </div>
      </div>
    </div>
  );
}
