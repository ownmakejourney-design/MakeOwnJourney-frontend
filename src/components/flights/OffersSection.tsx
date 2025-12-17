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
    <section className="w-full bg-background  md:px-16">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-text">
          Offers
        </h2>
        <button className="text-primary font-semibold hover:underline">
          VIEW ALL →
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition-all ${
              activeTab === tab
                ? "border-b-2 border-primary text-primary"
                : "text-text-secondary hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col justify-between rounded-2xl border border-border  p-4  transition hover:bg-hover-card"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">
                  {offer.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {offer.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <a
                href={offer.link}
                className="text-sm font-semibold text-primary hover:underline"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
