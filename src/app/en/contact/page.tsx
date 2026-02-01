import ContactForm from "@/components/ContactForm";

export default function EnglishContactPage() {
  const interests = [
    { value: "kochi-iwakuni", label: "Kochi & Iwakuni Cherry Blossom Voyage" },
    { value: "suruga-weekend", label: "Suruga Bay Weekend Escape" },
    { value: "general", label: "General Inquiry" },
  ];

  return (
    <div className="bg-white px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Have questions about our cruises? We&apos;d love to hear from you.
            Fill out the form below and our team will get back to you within 2
            business days.
          </p>
        </div>

        <div className="mt-12">
          <ContactForm locale="en" interests={interests} />
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 p-8 text-center">
          <h3 className="font-bold text-gray-900">Prefer to reach us directly?</h3>
          <p className="mt-2 text-sm text-gray-600">
            Email: info@anchor-infinite.com
          </p>
          <p className="text-sm text-gray-600">Phone: +81-3-1234-5678</p>
        </div>
      </div>
    </div>
  );
}
