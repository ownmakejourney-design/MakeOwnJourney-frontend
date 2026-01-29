import { GoogleReview } from "@/data/googleReviews";
import { FaStar } from "react-icons/fa";

interface Props {
  review: GoogleReview;
}

export default function GoogleReviewCard({ review }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
          {review.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">
            {review.name}
          </h4>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed">
        “{review.review}”
      </p>

      {/* Google Tag */}
      <p className="mt-3 text-xs text-gray-400 font-semibold">
        Google Review
      </p>
    </div>
  );
}
