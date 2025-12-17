"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import type { AppDispatch } from "@/redux/store";
import { searchFlights } from "@/redux/slices/flightSlice";
import FromInput from "./FromInput";

const FlightSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [searchFlight, setSearchFlight] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    tripType: "oneway",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchFlight((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 REDUX API CALL
    dispatch(searchFlights(searchFlight));

    // 🔥 NAVIGATE
    const params = new URLSearchParams({
      from: searchFlight.from,
      to: searchFlight.to,
      departureDate: searchFlight.departureDate,
      tripType: searchFlight.tripType,
      passengers: String(searchFlight.passengers),
    });

    if (searchFlight.returnDate && searchFlight.tripType !== "oneway") {
      params.append("returnDate", searchFlight.returnDate);
    }

    router.push(`/flights/search?${params.toString()}`);
  };


  return (
    <div className="my-10  md:mx-8 lg:mx-12 p-2 md:p-8 rounded-xl shadow-card text-text">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Trip Type */}
        <div className="flex flex-wrap gap-4">
          {["oneway", "roundtrip", "multicity"].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={searchFlight.tripType === type}
                onChange={handleChange}
                className="accent-primary"
              />
              <span className="capitalize">
                {type === "oneway"
                  ? "One Way"
                  : type === "roundtrip"
                  ? "Round Trip"
                  : "Multi City"}
              </span>
            </label>
          ))}
        </div>

        {/* Search Inputs */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
          gap-4
        ">
          {/* FROM */}
          <FromInput
            value={searchFlight.from}
            onSelect={(value) =>
              setSearchFlight((prev) => ({ ...prev, from: value }))
            }
          />

          {/* TO */}
          <div className="bg-background border border-border px-4 py-3 rounded-md">
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
          <div className="bg-background border border-border px-4 py-3 rounded-md">
            <label className="text-text-secondary text-sm">Departure</label>
            <input
              type="date"
              name="departureDate"
              value={searchFlight.departureDate}
              onChange={handleChange}
              className="mt-2 w-full outline-none bg-transparent"
            />
          </div>

          {/* RETURN */}
          <div className="bg-background border border-border px-4 py-3 rounded-md">
            <label className="text-text-secondary text-sm">Return</label>
            <input
              type="date"
              name="returnDate"
              value={searchFlight.returnDate}
              onChange={handleChange}
              className="mt-2 w-full outline-none bg-transparent"
            />
          </div>

          {/* PASSENGERS */}
          <div className="bg-background border border-border px-4 py-3 rounded-md">
            <label className="text-text-secondary text-sm">Passengers</label>
            <select
              name="passengers"
              value={searchFlight.passengers}
              onChange={handleChange}
              className="mt-2 w-full outline-none bg-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <option key={p} value={p}>
                  {p} Passenger{p > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-button-text px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Search Flights
          </button>
        </div>
      </form>

      {/* Preview */}
      <p className="text-text-secondary text-center mt-4">
        {searchFlight.from && searchFlight.to
          ? `${searchFlight.from} → ${searchFlight.to}`
          : ""}
      </p>
    </div>
  );
};

export default FlightSearch;
