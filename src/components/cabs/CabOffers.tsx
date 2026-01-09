"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/* ================= TYPES ================= */

type Intro = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

type Offer = {
  id: string;
  title: string;
  subtitle: string;
  validTill: string;
  image: string;
};

type Feature = {
  id: string;
  icon: string;
  text: string;
};

/* ================= DATA ================= */

const introData: Intro = {
  tag: "Coming Soon",
  title: "Introducing Hourly Rentals",
  description:
    "Need to run errands or visit multiple stops? Our Hourly Rental cabs let you travel freely with flexible hours and affordable pricing.",
  image: "/Cabs/HourlyRentals.png",
};

const offers: Offer[] = [
  {
    id: "1",
    title: "Up to ₹500 OFF on Outstation Cabs",
    subtitle: "Limited Period Offer",
    validTill: "Valid till: 31st Jan",
    image: "/Cabs/offers/outstation-cab.png",
  },
  {
    id: "2",
    title: "Save up to 15% on Airport Transfers",
    subtitle: "Airport Cabs",
    validTill: "Limited Time Offer",
    image: "/Cabs/offers/airport-cab.png",
  },
  {
    id: "3",
    title: "Flat ₹300 OFF on Hourly Rentals",
    subtitle: "City Travel",
    validTill: "Today Only",
    image: "/Cabs/offers/hourly-cab.png",
  },
];

const features: Feature[] = [
  { id: "1", icon: "🏆", text: "Experienced and polite drivers" },
  { id: "2", icon: "🚗", text: "Clean and well-maintained cabs" },
];

/* ================= COMPONENT ================= */

export default function CabRightSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const infiniteOffers = [...offers, ...offers];

  /* 🔁 AUTO INFINITE SLIDE */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      const el = scrollRef.current;
      el.scrollLeft += 220;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 2200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slideLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft -= 220;
  };

  const slideRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += 220;
  };

  return (
    <div className="space-y-6 px-4">

      {/* ================= INTRO CARD (CLICKABLE) ================= */}
      <div
        onClick={() => {
          setSelectedOffer(null); // intro ke liye
          setOpenModal(true);
        }}
        className="cursor-pointer flex items-center gap-4 bg-white rounded-2xl p-5 shadow hover:shadow-lg transition"
      >
        <div className="flex-1">
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="inline-flex bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
          >
            {introData.tag}
          </motion.span>

          <h3 className="mt-3 text-lg font-semibold">
            {introData.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {introData.description}
          </p>
        </div>

        <Image
          src={introData.image}
          alt="Hourly Rental"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* ================= CAB OFFERS ================= */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Cab Offers</h2>

          <div className="flex gap-2">
            <button
              onClick={slideLeft}
              className="w-7 h-7 rounded-full border flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={slideRight}
              className="w-7 h-7 rounded-full border flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-hidden scroll-smooth"
        >
          {infiniteOffers.map((offer, index) => (
            <div
              key={`${offer.id}-${index}`}
              onClick={() => {
                setSelectedOffer(offer);
                setOpenModal(true);
              }}
              className="cursor-pointer min-w-[200px] bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-28 w-full object-cover rounded-t-xl"
              />

              <div className="p-3">
                <p className="text-sm font-semibold leading-snug">
                  {offer.title}
                </p>
                <p className="text-xs text-gray-500">
                  {offer.subtitle}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {offer.validTill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="flex gap-4">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow text-sm"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-xl"
              >
                ✕
              </button>

              <h3 className="text-lg font-semibold mb-2">
                {selectedOffer
                  ? selectedOffer.title
                  : "Hourly / Rental Cab Service"}
              </h3>

              <p className="text-sm text-gray-600">
                {selectedOffer
                  ? selectedOffer.subtitle
                  : "Book flexible hourly cabs for meetings, errands, shopping, or city travel."}
              </p>

              <button
                onClick={() => router.push("/contact")}
                className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
              >
               Coming Soon
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
