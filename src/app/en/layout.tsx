import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/content";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = getSiteContent("en");

  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" nav={content.nav} />
      <main>{children}</main>
      <Footer locale="en" footer={content.footer} />
    </div>
  );
}
