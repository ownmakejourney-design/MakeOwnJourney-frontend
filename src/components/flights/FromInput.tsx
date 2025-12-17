"use client";

import { useEffect, useRef, useState } from "react";

const airports = [
  { city: "New Delhi", airport: "Indira Gandhi International", code: "DEL" },
  { city: "Mumbai", airport: "Chhatrapati Shivaji International", code: "BOM" },
  { city: "Bangalore", airport: "Kempegowda International", code: "BLR" },
  { city: "Chennai", airport: "Chennai International", code: "MAA" },
];

type Props = {
  value: string;              // airport code (DEL)
  onSelect: (code: string) => void;
};

export default function FromInput({ value, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () =>
      document.removeEventListener("mousedown", handleOutside);
  }, []);

  const selectedAirport = airports.find(
    (a) => a.code === value
  );

  return (
    <div ref={wrapperRef} className="relative">
      {/* INPUT BOX */}
      <div
        className="flex flex-col bg-background border border-border px-4 py-3 rounded-md cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <label className="text-text-secondary text-sm">
          Start your journey from
        </label>

        <input
          readOnly
          value={
            selectedAirport
              ? `${selectedAirport.city} (${selectedAirport.code})`
              : ""
          }
          placeholder="From (City or Airport)"
          className="mt-2 text-lg font-medium outline-none bg-transparent cursor-pointer"
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-container border border-border rounded-md shadow-card">
          {airports.map((item) => (
            <button
              type="button"
              key={item.code}
              onClick={() => {
                onSelect(item.code);   // 🔥 ONLY CODE
                setOpen(false);
              }}
              className="w-full flex justify-between px-4 py-3 text-left hover:bg-hover-card"
            >
              <div>
                <p className="font-medium text-text">{item.city}</p>
                <p className="text-sm text-text-secondary">
                  {item.airport}
                </p>
              </div>
              <span className="font-semibold">{item.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
