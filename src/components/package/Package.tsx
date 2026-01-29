"use client";

import Link from "next/link";
import Image from "next/image";
import { Package } from "@/data/package";
import { GiAlarmClock } from "react-icons/gi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  pkg: Package;
}

export default function PackageCard({ pkg }: Props) {
  const [fav, setFav] = useState(false);

  return (
    <div className="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-gray-900 hover:shadow-lg transition-all duration-300">

      {/* 🔴 Discount Badge */}
      <span className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        25% OFF
      </span>

      {/* ⭐ Featured */}
      <span className="absolute top-3 right-3 z-20 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        ★ Featured
      </span>

      {/* ❤️ Favourite */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setFav(!fav);
        }}
        className={`absolute top-12 right-3 z-20 p-2 rounded-full shadow 
        ${fav ? "bg-red-600 text-white" : "bg-white text-gray-600"}`}
      >
        <FaHeart />
      </button>

      {/* CARD CLICK → DETAIL PAGE */}
      <Link href={`/package/${pkg.slug}`} className="block">

        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={pkg.images[2]}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
            {pkg.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2">
            {pkg.shortDescription}
          </p>

          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-gray-500 font-semibold">
              <GiAlarmClock className="inline-block text-xl mr-1" />
              {pkg.duration}
            </span>

            <span className="text-lg font-bold text-green-600">
              <LiaRupeeSignSolid className="inline-block text-xl" />
              {pkg.price}/-
            </span>
          </div>
        </div>
      </Link>

      {/* 🔵 ACTION BAR (NOT PART OF LINK) */}
      <div className="grid grid-cols-3 text-sm font-semibold text-blue-600 border-t">
        
        {/* CALL */}
        <a
          href="tel:+918750610304"
          onClick={(e) => e.stopPropagation()}
          className="py-3 text-center hover:bg-gray-100"
        >
          Call Now
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/918750610304?text=I want details for ${pkg.title}`}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="py-3 text-center hover:bg-gray-100"
        >
          WhatsApp
        </a>

        {/* ENQUIRY */}
        <Link
          href={`/enquiry?package=${pkg.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="py-3 text-center hover:bg-gray-100"
        >
          Enquiry
        </Link>

      </div>
    </div>
  );
}

