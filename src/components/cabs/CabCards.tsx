"use client";

type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;        // e.g. 4.2
  reviews: number;       // e.g. 320
  pricePerNight: number; // e.g. 3499
  image?: string;
};

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="border border-border rounded-lg p-4 shadow-md hover:shadow-card transition">
      <div className="flex gap-4">
        {/* IMAGE */}
        <div className="w-32 h-24 bg-gray-200 rounded-md overflow-hidden">
          {hotel.image ? (
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="flex-1 flex justify-between">
          <div>
            <p className="font-semibold text-lg">{hotel.name}</p>
            <p className="text-sm text-text-secondary">{hotel.location}</p>

            <p className="text-sm mt-1">
              ⭐ {hotel.rating} ({hotel.reviews} reviews)
            </p>
          </div>

          {/* PRICE & ACTION */}
          <div className="text-right">
            <p className="text-lg font-bold">
              ₹ {hotel.pricePerNight}
            </p>
            <p className="text-xs text-text-secondary">per night</p>

            <button
              onClick={() => console.log("Hotel selected:", hotel.id)}
              className="mt-2 bg-primary text-button-text px-6 py-1 rounded hover:bg-secondary transition"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
