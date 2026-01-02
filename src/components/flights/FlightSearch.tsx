"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import type { AppDispatch } from "@/redux/store";
import { searchFlights } from "@/redux/slices/flightSlice";
import FromInput from "./FromInput";

const today = new Date().toISOString().split("T")[0];

const FlightSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [searchFlight, setSearchFlight] = useState({
    from: "",
    to: "",
    departureDate: today,
    returnDate: "",
    passengers: 1,
    tripType: "oneway" as "oneway" | "roundtrip",
  });

  // one-way → return clear
  useEffect(() => {
    if (searchFlight.tripType === "oneway") {
      setSearchFlight((prev) => ({ ...prev, returnDate: "" }));
    }
  }, [searchFlight.tripType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchFlight((prev) => ({ ...prev, [name]: value }));
  };

  // return click → auto roundtrip
  const handleReturnFocus = () => {
    if (searchFlight.tripType === "oneway") {
      setSearchFlight((prev) => ({ ...prev, tripType: "roundtrip" }));
    }
  };

  // passengers + -
  const increasePassengers = () => {
    setSearchFlight((prev) => ({
      ...prev,
      passengers: Math.min(prev.passengers + 1, 6),
    }));
  };

  const decreasePassengers = () => {
    setSearchFlight((prev) => ({
      ...prev,
      passengers: Math.max(prev.passengers - 1, 1),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(searchFlights(searchFlight));

    const params = new URLSearchParams({
      from: searchFlight.from,
      to: searchFlight.to,
      departureDate: searchFlight.departureDate,
      tripType: searchFlight.tripType,
      passengers: String(searchFlight.passengers),
    });

    if (searchFlight.tripType === "roundtrip" && searchFlight.returnDate) {
      params.append("returnDate", searchFlight.returnDate);
    }

    router.push(`/flights/search?${params.toString()}`);
  };

  return (
    <div className="my-10 md:mx-8 lg:mx-12 p-2 md:p-8 rounded-xl shadow-card text-text">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Trip Type */}
        <div className="flex gap-6">
          {["oneway", "roundtrip"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={searchFlight.tripType === type}
                onChange={handleChange}
                className="accent-primary"
              />
              <span>{type === "oneway" ? "One Way" : "Round Trip"}</span>
            </label>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* FROM */}
          <FromInput
            value={searchFlight.from}
            onSelect={(value) =>
              setSearchFlight((prev) => ({ ...prev, from: value }))
            }
          />

          {/* TO (UNCHANGED) */}
          <div className="bg-background border border-border px-4 py-3 rounded-md
                          hover:border-primary hover:shadow-md transition">
            <label className="text-text-secondary text-sm">Going to</label>
            <input
              type="text"
              name="to"
              placeholder="To (City or Airport)"
              value={searchFlight.to}
              onChange={handleChange}
              className="mt-2 w-full text-lg outline-none bg-transparent"
            />
          </div>

          {/* DEPARTURE */}
          <div className="bg-background border border-border px-4 py-3 rounded-md
                          hover:border-primary hover:shadow-md transition">
            <label className="text-text-secondary text-sm">Departure</label>
            <input
              type="date"
              name="departureDate"
              min={today}
              value={searchFlight.departureDate}
              onChange={handleChange}
              className="mt-2 w-full outline-none bg-transparent cursor-pointer"
            />
          </div>

          {/* RETURN */}
          <div className="bg-background border border-border px-4 py-3 rounded-md
                          hover:border-primary hover:shadow-md transition">
            <label className="text-text-secondary text-sm">Return</label>

            {searchFlight.tripType === "oneway" ? (
              <p
                onClick={handleReturnFocus}
                className="mt-2 text-sm text-gray-400 cursor-pointer"
              >
                Add return date
              </p>
            ) : (
              <input
                type="date"
                name="returnDate"
                min={searchFlight.departureDate}
                value={searchFlight.returnDate}
                onFocus={handleReturnFocus}
                onChange={handleChange}
                className="mt-2 w-full outline-none bg-transparent cursor-pointer"
              />
            )}
          </div>

          {/* PASSENGERS */}
          <div className="bg-background border border-border px-4 py-3 rounded-md
                          hover:border-primary hover:shadow-md transition">
            <label className="text-text-secondary text-sm">Passengers</label>
            <div className="flex items-center justify-between mt-2">
              <button
                type="button"
                onClick={decreasePassengers}
                className="px-3 py-1 border rounded-md"
              >
                −
              </button>
              <span className="text-lg font-semibold">
                {searchFlight.passengers}
              </span>
              <button
                type="button"
                onClick={increasePassengers}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-button-text px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Search Flights
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearch;
