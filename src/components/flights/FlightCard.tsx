"use client";

import { Flight, selectFlight } from "@/redux/slices/flightSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

export default function FlightCard({ flight }: { flight: Flight }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="border border-border rounded-lg p-4 shadow-md hover:shadow-card hover:shadow-md hover:border hover:border-border transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">
            {flight.from} → {flight.to}
          </p>
          <p className="text-sm text-text-secondary">
            {flight.airline} · {flight.stops === 0 ? "Non-stop" : `${flight.stops} stops`}
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold">₹ {flight.price}</p>
          <button
            onClick={() => dispatch(selectFlight(flight))}
            className="mt-2 bg-primary text-button-text px-10 py-1 rounded hover:bg-secondary transition"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
