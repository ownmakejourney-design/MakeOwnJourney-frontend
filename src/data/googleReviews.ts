export interface GoogleReview {
  id: number;
  name: string;
  rating: number;
  review: string;
  avatar?: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    review:
      "Amazing experience with Make Own Journey. Everything was well organized and the team was very supportive throughout the trip.",
  },
  {
    id: 2,
    name: "Pooja Verma",
    rating: 5,
    review:
      "Booked Goa package and it was totally worth it. Best prices and great service. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 4,
    review:
      "Very professional travel agency. Hotels and transport were excellent. Will book again.",
  },
  {
    id: 4,
    name: "Neha Singh",
    rating: 5,
    review:
      "Smooth booking process and quick support. Loved the whole journey with Make Own Journey.",
  },
  {
    id: 5,
    name: "Rohit Mishra",
    rating: 5,
    review:
      "Great customer service and transparent pricing. The team helped us at every step of our journey.",
  },
  {
    id: 6,
    name: "Anjali Gupta",
    rating: 5,
    review:
      "Excellent travel experience. Hotels, transport, and itinerary were perfectly planned.",
  },
];
