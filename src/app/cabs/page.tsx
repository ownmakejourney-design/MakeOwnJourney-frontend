"use client";



import About from "@/components/cabs/About";
import CabSearch from "@/components/cabs/CabSearch";  
import CabOffers from "@/components/cabs/CabOffers";
import { useEffect, useState } from "react";

export default function FlightsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <>
   <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
  <CabSearch />
  <CabOffers />
</div>

    <About />
  </>;
}