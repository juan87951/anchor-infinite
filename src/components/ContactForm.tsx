"use client";

import { useState } from "react";

interface ContactFormProps {
  locale: "en" | "ja";
  interests: { value: string; label: string }[];
}

export default function ContactForm({ locale, interests }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const isEn = locale === "en";

  const labels = isEn
    ? { name: "Name", email: "Email", phone: "Phone", interest: "Interest", message: "Message", submit: "Send Inquiry", success: "Thank you for your inquiry! We will contact you within 2 business days." }
    : { name: "お名前", email: "メールアドレス", phone: "電話番号", interest: "ご興味のある内容", message: "メッセージ", submit: "送信する", success: "お問い合わせありがとうございます。2営業日以内にご連絡いたします。" };

  const inputStyles = isEn
    ? "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-400 focus:ring-2 focus:ring-brand-200 focus:outline-none"
    : "w-full rounded-sm border border-gold-400/30 bg-navy-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none";

  const labelStyles = isEn
    ? "mb-1.5 block text-sm font-medium text-gray-700"
    : "mb-1.5 block text-sm font-medium text-gray-300";

  const buttonStyles = isEn
    ? "w-full rounded-full bg-brand-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
    : "w-full rounded-sm border border-gold-400 bg-transparent py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-400 hover:text-navy-900";

  if (submitted) {
    return (
      <div className={`rounded-lg p-8 text-center ${isEn ? "bg-brand-50 text-brand-600" : "border border-gold-400/30 bg-navy-800 text-gold-400"}`}>
        <svg className="mx-auto mb-4 h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-lg font-medium">{labels.success}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <label className={labelStyles}>{labels.name}</label>
        <input type="text" required className={inputStyles} />
      </div>
      <div>
        <label className={labelStyles}>{labels.email}</label>
        <input type="email" required className={inputStyles} />
      </div>
      <div>
        <label className={labelStyles}>{labels.phone}</label>
        <input type="tel" className={inputStyles} />
      </div>
      <div>
        <label className={labelStyles}>{labels.interest}</label>
        <select required className={inputStyles}>
          <option value="">{isEn ? "Select an option" : "選択してください"}</option>
          {interests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelStyles}>{labels.message}</label>
        <textarea required rows={5} className={inputStyles} />
      </div>
      <button type="submit" className={buttonStyles}>
        {labels.submit}
      </button>
    </form>
  );
}
