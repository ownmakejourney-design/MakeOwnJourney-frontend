import GoogleReviewCard from "@/components/package/GoogleReviewCard";
import PackageCard from "@/components/package/Package";
import { googleReviews } from "@/data/googleReviews";

import { packages } from "@/data/package";


export default function PackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Tour Packages
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <section className="max-w-screen mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {googleReviews.map((review) => (
          <GoogleReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </section>
    </div>
  );
}
