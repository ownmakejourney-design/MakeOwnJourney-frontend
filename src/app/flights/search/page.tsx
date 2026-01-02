"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FlightCard from "@/components/flights/FlightCard";
import FlightFilters from "@/components/flights/FlightFilters";

export default function FlightSearchPage() {
  const flights = useSelector(
    (state: RootState) => state.flight.filteredFlights
  );

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 p-6">
      <FlightFilters />

      <div className="md:col-span-3 space-y-4">
        {flights.length === 0 && (
          <p className="text-text-secondary  ml-9">No flights found</p>
        )}

        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}
