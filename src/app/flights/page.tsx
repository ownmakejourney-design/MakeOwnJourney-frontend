"use client";
import About from "@/components/flights/About";
import FlightFAQ from "@/components/flights/FlightFAQ";
import FlightSearch from "@/components/flights/FlightSearch";
import OffersSection from "@/components/flights/OffersSection";
import PopularRoutes from "@/components/flights/PopularRoutes";
import { useEffect, useState } from "react";

export default function FlightsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <>
    <FlightSearch />
    <PopularRoutes />
    <OffersSection />
    <FlightFAQ />
    <About />
  </>;
}