"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const today = new Date().toISOString().split("T")[0];

// ✅ numeric keys ka type
type CountKey = "rooms" | "adults" | "children";

const HotelSearch = () => {
  const router = useRouter();
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [openGuests, setOpenGuests] = useState(false);

  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: today,
    checkOut: "",
    rooms: 1,
    adults: 2,
    children: 0,
  });

  // close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpenGuests(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ strict numeric update
  const updateCount = (key: CountKey, value: number) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      location: searchData.location,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      rooms: String(searchData.rooms),
      adults: String(searchData.adults),
      children: String(searchData.children),
    });

    router.push(`/hotels/search?${params.toString()}`);
  };

  return (
    <div className="my-10 mx-4 md:mx-8 p-6 rounded-2xl bg-white shadow-lg relative">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        {/* WHERE */}
        <div className="border rounded-xl px-4 py-3">
          <label className="text-sm text-gray-500">Where to</label>
          <input
            type="text"
            name="location"
            placeholder="Area, Landmark or Property"
            value={searchData.location}
            onChange={handleChange}
            className="w-full mt-1 outline-none text-lg"
          />
        </div>

        {/* CHECK IN */}
        <div className="border rounded-xl px-4 py-3">
          <label className="text-sm text-gray-500">Check-in</label>
          <input
            type="date"
            name="checkIn"
            min={today}
            value={searchData.checkIn}
            onChange={handleChange}
            className="w-full mt-1 outline-none"
          />
        </div>

        {/* CHECK OUT */}
        <div className="border rounded-xl px-4 py-3">
          <label className="text-sm text-gray-500">Check-out</label>
          <input
            type="date"
            name="checkOut"
            min={searchData.checkIn}
            value={searchData.checkOut}
            onChange={handleChange}
            className="w-full mt-1 outline-none"
          />
        </div>

        {/* GUESTS & ROOMS */}
        <div className="relative">
          <div
            onClick={() => setOpenGuests(!openGuests)}
            className="border rounded-xl px-4 py-3 cursor-pointer"
          >
            <label className="text-sm text-gray-500">Guests & Rooms</label>
            <p className="mt-1 font-semibold">
              {searchData.adults} Adults | {searchData.rooms} Room
            </p>
          </div>

          {openGuests && (
            <div
              ref={popupRef}
              className="absolute z-50 bg-white w-80 right-0 mt-2 p-5 rounded-xl shadow-xl"
            >
              {(
                [
                  { label: "Rooms", key: "rooms", min: 1 },
                  { label: "Adults", key: "adults", min: 1 },
                  { label: "Children", key: "children", min: 0 },
                ] as { label: string; key: CountKey; min: number }[]
              ).map(({ label, key, min }) => (
                <div
                  key={key}
                  className="flex justify-between items-center mb-4"
                >
                  <span>{label}</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateCount(key, Math.max(min, searchData[key] - 1))
                      }
                      className="w-8 h-8 border rounded-full"
                    >
                      −
                    </button>

                    <span className="font-semibold">{searchData[key]}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateCount(key, searchData[key] + 1)
                      }
                      className="w-8 h-8 border rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => setOpenGuests(false)}
                className="w-full bg-orange-500 text-white py-2 rounded-lg mt-2"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* SEARCH */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default HotelSearch;
