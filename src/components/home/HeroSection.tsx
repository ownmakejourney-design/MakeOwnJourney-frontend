"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/travellingImage.jpg",
  "/goa.png",
  "/travellingImage.jpg",
  "/hyderabad.png",
  "/Green.png",
  "/hyderabad.png",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* SLIDER WRAPPER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/30" />

     
     <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-white text-center flex flex-col items-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-text">
            Book Your Journey with Confidence
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold">
            Flights, Hotels, Cabs, Buses & Holiday Packages – All in One Place
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-200">
            Plan your travel effortlessly with seamless bookings, best prices,
            and reliable services tailored for every journey.
          </p>

          <button className="mt-6 border-2 shadow-md  hover:bg-primary  hover:shadow-md hover:border px-6 py-3 rounded-lg transition">
            Get Started
          </button>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
