"use client";
import HeroSection from "@/components/home/HeroSection";
import Offer from "@/components/home/Offer";
import PackageCard from "@/components/package/Package";
import { packages } from "@/data/package";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Offer />
      <div className="max-w-screen mx-auto px-14 py-10 ">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Tour Packages
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </main>
  );
}
