"use client";

import { useDispatch } from "react-redux";
import { setFilter } from "@/redux/slices/flightSlice";
import type { AppDispatch } from "@/redux/store";

export default function FlightFilters() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <aside className=" border border-border shadow shadow-card rounded-lg p-4 space-y-6  md:w-72">
      
      {/* Popular Filters */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Popular Filters</h3>

        {/* Non Stop */}
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(
                  setFilter({
                    stops: e.target.checked ? 0 : undefined,
                  })
                )
              }
            />
            <span>Non Stop</span>
          </div>
          <span className="text-sm opacity-70">USD 229</span>
        </label>

        {/* Refundable */}
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <input type="checkbox" disabled />
            <span>Refundable Fares</span>
          </div>
          <span className="text-sm opacity-70">USD 204</span>
        </label>

        {/* Airline */}
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(
                  setFilter({
                    airline: e.target.checked ? "IndiGo" : undefined,
                  })
                )
              }
            />
            <span>IndiGo</span>
          </div>
          <span className="text-sm opacity-70">USD 204</span>
        </label>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Price Range</h3>

        <input
          type="range"
          min={50}
          max={500}
          step={10}
          defaultValue={500}
          onChange={(e) =>
            dispatch(
              setFilter({ maxPrice: Number(e.target.value) })
            )
          }
          className="w-full accent-primary"
        />

        <div className="flex justify-between text-sm opacity-70">
          <span>USD 87</span>
          <span>USD 400</span>
        </div>
      </div>

      {/* Onward Journey */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Onward Journey</h3>
        <p className="text-sm text-text-secondary">
          Stops From New Delhi
        </p>

        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(
                  setFilter({
                    stops: e.target.checked ? 0 : undefined,
                  })
                )
              }
            />
            <span>Non Stop</span>
          </div>
          <span className="text-sm opacity-70">USD 111</span>
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(
                  setFilter({
                    stops: e.target.checked ? 1 : undefined,
                  })
                )
              }
            />
            <span>1 Stop</span>
          </div>
          <span className="text-sm opacity-70">USD 87</span>
        </label>
      </div>
    </aside>
  );
}
