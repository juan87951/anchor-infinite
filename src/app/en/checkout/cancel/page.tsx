import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sakura-100 text-3xl text-sakura-500">
          ←
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Checkout Cancelled
        </h1>
        <p className="mt-3 text-gray-600">
          Your booking was not completed. No charges were made. Feel free to
          browse our cruises and try again when you&apos;re ready.
        </p>
        <Link
          href="/en/cruises"
          className="mt-8 inline-block rounded-full bg-sakura-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-sakura-600 hover:shadow-xl"
        >
          Back to Cruises
        </Link>
      </div>
    </div>
  );
}
