import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="max-w-xl text-center bg-container  border-gray-700 rounded-2xl p-10 shadow-xl">
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-text tracking-wide">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-text">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          Oops! The page you are trying to access doesn’t exist or may have been
          moved. Let’s get you back on track with your journey.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-700" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg border text-gray-900 font-medium hover:bg-background hover:shadow transition"
          >
            Go to Home
          </Link>

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-lg border border-gray-600 text-text hover:text-white hover:bg-gray-800 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} makeownjourney — Plan journeys, not errors.
        </p>
      </div>
    </div>
  );
}
