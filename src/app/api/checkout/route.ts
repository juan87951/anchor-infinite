import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getCruise } from "@/lib/content";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  const cruise = getCruise(slug);
  if (!cruise) {
    return NextResponse.json({ error: "Cruise not found" }, { status: 404 });
  }

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: cruise.title,
            description: cruise.subtitle,
          },
          unit_amount: cruise.priceInCents,
        },
        quantity: 1,
      },
    ],
    metadata: {
      cruiseSlug: cruise.slug,
    },
    success_url: `${req.nextUrl.origin}/en/checkout/success`,
    cancel_url: `${req.nextUrl.origin}/en/checkout/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
