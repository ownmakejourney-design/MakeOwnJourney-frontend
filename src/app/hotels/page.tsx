"use client";

import About from "@/components/flights/About";
import HotelCard from "@/components/hotels/HotelsCards";
import HotelSearch from "@/components/hotels/HotelSearch";
import HotelsOffers from "@/components/hotels/HotelsOffers";
import { useEffect, useState } from "react";

export default function FlightsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <>
    <HotelSearch/>
   <HotelCard 
  hotel={{
    id: "h1",
    name: "Hotel Dream Palace",
    location: "Noida Sector 62",
    rating: 4.3,
    reviews: 210,
    pricePerNight: 2899,
    image: "/hotel.jpg",
  }}
/>
   <HotelsOffers />
    <About />
  </>;
}