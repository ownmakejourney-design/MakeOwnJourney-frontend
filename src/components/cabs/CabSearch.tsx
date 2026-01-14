"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const today = new Date().toISOString().split("T")[0];

type CabType =
  | "outstation-oneway"
  | "outstation-round"
  | "airport"
  | "hourly";

const CabSearch = () => {
  const router = useRouter();

  const [cabType, setCabType] = useState<CabType>("outstation-oneway");

  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    pickupDate: today,
    pickupTime: "10:00",
    returnDate: "",
    returnTime: "",
    package: "1hr-10km",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      type: cabType,
      ...searchData,
    });

    router.push(`/cab/search?${params.toString()}`);
  };

  return (
    <div className="mx-4 md:mx-8 my-10 bg-white rounded-2xl shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ================= CAB TYPE ================= */}
        <div className="flex flex-wrap gap-6">
          {[
            { label: "Outstation One-way", value: "outstation-oneway" },
            { label: "Outstation Road Trip", value: "outstation-round" },
            { label: "Airport Transfer", value: "airport" },
            { label: "Hourly Rental", value: "hourly" },
          ].map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-2 cursor-pointer text-sm font-medium"
            >
              <input
                type="radio"
                checked={cabType === item.value}
                onChange={() => setCabType(item.value as CabType)}
              />
              {item.label}
            </label>
          ))}
        </div>

        {/* ================= COMMON FIELDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* FROM */}
          <div className="border rounded-xl px-4 py-3">
            <label className="text-xs text-gray-500">From</label>
            <input
              type="text"
              name="from"
              placeholder="Enter Pickup location"
              value={searchData.from}
              onChange={handleChange}
              className="w-full mt-1 outline-none text-sm"
            />
          </div>

          {/* TO (not for hourly) */}
          {cabType !== "hourly" && (
            <div className="border rounded-xl px-4 py-3">
              <label className="text-xs text-gray-500">To</label>
              <input
                type="text"
                name="to"
                placeholder="Enter Drop location"
                value={searchData.to}
                onChange={handleChange}
                className="w-full mt-1 outline-none text-sm"
              />
            </div>
          )}

          {/* PICKUP DATE */}
          <div className="border rounded-xl px-4 py-3">
            <label className="text-xs text-gray-500">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              min={today}
              value={searchData.pickupDate}
              onChange={handleChange}
              className="w-full mt-1 outline-none text-sm"
            />
          </div>

          {/* PICKUP TIME */}
          <div className="border rounded-xl px-4 py-3">
            <label className="text-xs text-gray-500">Pickup Time</label>
            <input
              type="time"
              name="pickupTime"
              value={searchData.pickupTime}
              onChange={handleChange}
              className="w-full mt-1 outline-none text-sm"
            />
          </div>

          {/* ================= RETURN FIELDS (ONLY ROAD TRIP) ================= */}
          {cabType === "outstation-round" && (
            <>
              <div className="border rounded-xl px-4 py-3">
                <label className="text-xs text-gray-500">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  min={searchData.pickupDate}
                  value={searchData.returnDate}
                  onChange={handleChange}
                  className="w-full mt-1 outline-none text-sm"
                />
              </div>

              <div className="border rounded-xl px-4 py-3">
                <label className="text-xs text-gray-500">Return Time</label>
                <input
                  type="time"
                  name="returnTime"
                  value={searchData.returnTime}
                  onChange={handleChange}
                  className="w-full mt-1 outline-none text-sm"
                />
              </div>
            </>
          )}

          {/* ================= HOURLY PACKAGE ================= */}
          {cabType === "hourly" && (
            <div className="border rounded-xl px-4 py-3 md:col-span-2">
              <label className="text-xs text-gray-500">Package</label>
              <select
                name="package"
                value={searchData.package}
                onChange={handleChange}
                className="w-full mt-1 outline-none text-sm bg-transparent"
              >
                <option value="1hr-10km">1 hr (10 km)</option>
                <option value="2hr-20km">2 hr (20 km)</option>
                <option value="3hr-30km">3 hr (30 km)</option>
                <option value="4hr-40km">4 hr (40 km)</option>
              </select>
            </div>
          )}

        </div>

        {/* ================= SEARCH BUTTON ================= */}
        <div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-gray-800 text-white px-10 py-3 rounded-full font-semibold transition"
          >
            SEARCH CABS
          </button>
        </div>

      </form>
    </div>
  );
};
  
export default CabSearch;
