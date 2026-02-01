import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/content";

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = getSiteContent("ja");

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Header locale="ja" nav={content.nav} />
      <main>{children}</main>
      <Footer locale="ja" footer={content.footer} />
    </div>
  );
}
