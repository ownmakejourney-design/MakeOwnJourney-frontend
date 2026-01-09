"use client";

import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const offers = [
  {
    id: 1,
    title: "Hotels & Stays",
    description: "Up to 35% OFF on premium hotel bookings across India.",
    date: "Valid till 10 Jan 2026",
  },
  {
    id: 2,
    title: "Flights Booking",
    description: "Save ₹1500 on domestic flight tickets with instant discounts.",
    date: "Limited period offer",
  },
  {
    id: 3,
    title: "Bus Travel",
    description: "Flat 20% OFF on AC & sleeper bus bookings.",
    date: "Offer valid this weekend",
  },
  {
    id: 4,
    title: "Cabs & Airport Rides",
    description: "Get up to ₹500 OFF on airport cab bookings.",
    date: "Valid till 31 Dec 2025",
  },
  {
    id: 5,
    title: "Holiday Packages",
    description: "Exclusive deals on family & honeymoon holiday packages.",
    date: "Seasonal offer",
  },
];

const Offer = () => {
  return (
    <div className="flex flex-col p-4">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold">Offers for you</h1>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 p-3 mt-2 overflow-x-auto">
        {["All", "Bank Offers", "Flights", "Hotels", "Cabs", "Train"].map(
          (item) => (
            <button
              key={item}
              className="border-2 border-text-secondary px-5 py-2 hover:bg-container hover:border-border rounded-md text-sm md:text-base whitespace-nowrap"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* VIEW ALL */}
      <div className="relative flex justify-end px-5 py-2">
        <Link
          href="/offers"
          className="flex items-center gap-1 text-lg font-semibold hover:text-text-secondary"
        >
          View All <GrFormNextLink />
        </Link>
      </div>

      {/* OFFERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="
              rounded-2xl overflow-hidden
              bg-card border border-border
              shadow-card hover:bg-hover-card
              transition cursor-pointer
            "
          >
            {/* IMAGE SECTION */}
            <div className="relative h-44 bg-container flex items-center justify-center">
              <div className="absolute flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src="/travellingImage.jpg"
                      alt="Travel offer"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 text-text">
              <p className="text-sm text-text-secondary">{offer.title}</p>

              <h3 className="mt-1 text-lg font-bold">
                {offer.description}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                <span>📅</span>
                <span>{offer.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
