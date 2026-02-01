"use client";

import { useState } from "react";

export default function CheckoutButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-sakura-600 shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
    >
      {loading ? "Redirecting..." : "Book Now"}
    </button>
  );
}
