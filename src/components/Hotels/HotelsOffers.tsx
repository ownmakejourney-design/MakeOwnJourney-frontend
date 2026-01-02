"use client";

import React, { useRef } from "react";

type Offer = {
  id: string;
  title: string;
  subtitle: string;
  validTill: string;
  image: string;
};

const offers: Offer[] = [
  {
    id: "1",
    title: "Up to 45% OFF* on Hotels!",
    subtitle: "Travel Sale",
    validTill: "Valid till: 31st Dec'25",
    image: "/HotelOffers/Up-to-45-OFF-on-Hotels.png",
  },
  {
    id: "2",
    title: "Up to 40% OFF on Sarovar Hotels & Resorts",
    subtitle: "Luxury Stay",
    validTill: "Limited Period Offer",
    image: "/HotelOffers/up-to-45-off-hotels.png",
  },
  {
    id: "3",
    title: "Weekend Getaway Deals",
    subtitle: "Short Trips",
    validTill: "Valid this weekend",
    image: "/HotelOffers/Weekend Getaway Deals.png",
  },
  {
    id: "4",
    title: "Flat ₹1500 OFF on Premium Hotels",
    subtitle: "Premium Stay",
    validTill: "Valid till: 10th Jan",
    image: "/HotelOffers/Flat ₹1500 OFF on Premium Hotels.png",
  },
  {
    id: "5",
    title: "Book Early & Save More",
    subtitle: "Early Bird Offer",
    validTill: "Limited Time",
    image: "/HotelOffers/Book-Early-&-Save-More.png",
  },
  {
    id: "6",
    title: "Family Friendly Hotels",
    subtitle: "Kids Special",
    validTill: "Year End Sale",
    image: "/HotelOffers/Family-Friendly-Hotels.png",
  },
];

export default function HotelsOffers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative my-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Offers for you</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="min-w-[300px] bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="h-36 rounded-lg overflow-hidden mb-3">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-semibold text-lg">{offer.title}</p>
            <p className="text-sm text-gray-500">{offer.subtitle}</p>
            <p className="text-sm mt-2 text-gray-600">{offer.validTill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
