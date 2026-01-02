"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function OffersSection() {
  const tabs = [
    "All Offers",
    "Flights",
    "Hotels",
    "Holidays",
    "Buses",
    "Visa",
    "Cabs",
    "Bank Offers",
  ];

  const [activeTab, setActiveTab] = useState("Flights");

  const offers = [
    {
      id: 1,
      image: "/travel.png",
      title: "The Year’s Biggest Deals",
      subtitle: "on flights, stays, packages, buses, cabs & more.",
      link: "#",
    },
    {
      id: 2,
      image: "/flight.png",
      title: "Up to 25% OFF",
      subtitle: "on domestic flights",
      link: "#",
    },
    {
      id: 3,
      image: "/Green.png",
      title: "Special Picks of the Week",
      subtitle: "Grab up to 50% OFF on flights & stays",
      link: "#",
    },
    {
      id: 4,
      image: "/White1.png",
      title: "Up to ₹10,000 OFF",
      subtitle: "on international flights",
      link: "#",
    },
    {
      id: 6,
      image: "/Tour1.png",
      title: "Round-Trip Special Fare",
      subtitle: "Huge discount on return fare",
      link: "#",
    },
    {
      id: 7,
      image: "/cancel.png",
      title: "Free Cancellation Window",
      subtitle: "Cancel within 10–15 minutes for free",
      link: "#",
    },
    {
      id: 8,
      image: "/Promo.png",
      title: "Promo Codes & Seasonal Offers",
      subtitle: "Extra discounts on festivals & weekends",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-background px-4 py-8 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-text">Offers</h2>
        <button className="text-primary font-semibold hover:underline">
          VIEW ALL →
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap gap-6 border-b border-border pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-1 text-sm sm:text-base font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-primary hover:border-primary/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-hover-card 
                       transition-all duration-500 ease-out 
                       hover:shadow-2xl hover:-translate-y-3 
                       flex flex-col h-full"
          >
            {/* Entire card content scales together on hover */}
            <div className="transform transition-transform duration-500 group-hover:scale-105 flex flex-col h-full">
              
              <div className="relative overflow-hidden rounded-t-2xl mx-2 mt-4">
                <div className="aspect-video relative"> 
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 22vw"
                    priority={offer.id <= 3}
                  />
                </div>
              </div>

             
              <div className="p-5 pb-6 flex flex-col flex-grow justify-between mx-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text line-clamp-2">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {offer.subtitle}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href={offer.link}
                    className="text-sm font-semibold text-primary hover:underline transition-colors"
                  >
                    BOOK NOW 
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}