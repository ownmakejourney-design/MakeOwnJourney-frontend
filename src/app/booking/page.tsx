"use client";
import { useSelector } from "react-redux";

export default function BookingPage() {
  const flight = useSelector((s:any)=>s.flight.selectedFlight);
  if(!flight) return <p>No flight selected</p>;
  return <p>Booking {flight.from} → {flight.to}</p>;
}
