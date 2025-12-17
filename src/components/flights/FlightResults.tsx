"use client";

import { Button, Card, Tag } from "antd";

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: number;
}

export default function FlightResults({
  flights,
  onBook,
}: {
  flights: Flight[];
  onBook: (flight: Flight) => void;
}) {
  if (!flights.length) {
    return <p>No flights found.</p>;
  }

  return (
    <section>
      <h3>Available Flights</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {flights.map((flight) => (
          <Card key={flight.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h4>{flight.airline}</h4>
                <p>{flight.flightNumber}</p>
                <p>
                  {flight.departure} → {flight.arrival}
                </p>
                <p>{flight.duration}</p>
                <Tag>{flight.stops}</Tag>
              </div>

              <div style={{ textAlign: "right" }}>
                <h3>₹{flight.price}</h3>
                <Button type="primary" onClick={() => onBook(flight)}>
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
