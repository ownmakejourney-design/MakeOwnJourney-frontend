"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Plane,
  HeartPulse,
  Briefcase,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function TravelInsurancePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const insuranceTypes = [
    {
      title: "Single Trip Insurance",
      desc: "Covers one specific trip for a fixed duration. Best for short vacations.",
      icon: <Plane size={28} />,
    },
    {
      title: "Multi-Trip Insurance",
      desc: "Covers multiple trips in a year. Ideal for frequent travelers.",
      icon: <Globe size={28} />,
    },
    {
      title: "Student Travel Insurance",
      desc: "Designed for students studying abroad with extended coverage.",
      icon: <Users size={28} />,
    },
    {
      title: "Senior Citizen Insurance",
      desc: "Special coverage for travelers aged 60+ with medical benefits.",
      icon: <HeartPulse size={28} />,
    },
    {
      title: "Business Travel Insurance",
      desc: "Covers work trips, equipment loss, and trip delays.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Family Travel Insurance",
      desc: "One policy covering the entire family for a trip.",
      icon: <Users size={28} />,
    },
  ];

  const benefits = [
    "Medical emergencies & hospitalization",
    "Trip cancellation & delay coverage",
    "Loss of passport or baggage",
    "Emergency evacuation & repatriation",
    "Cashless treatment in network hospitals",
    "24/7 global assistance",
  ];

  const eligibility = [
    "Indian residents",
    "Age between 6 months to 70 years (varies by plan)",
    "Valid passport",
    "Confirmed travel dates",
  ];

  const faqData = [
    {
      q: "Is travel insurance mandatory?",
      a: "Many countries like Schengen nations require travel insurance for visa approval. Even when not mandatory, it is highly recommended.",
    },
    {
      q: "Does travel insurance cover COVID-19?",
      a: "Yes, most modern travel insurance plans cover COVID-19 related medical expenses and trip cancellations.",
    },
    {
      q: "When should I buy travel insurance?",
      a: "You should buy travel insurance immediately after booking your trip to get maximum benefits.",
    },
    {
      q: "Can I extend my travel insurance?",
      a: "Some insurers allow extension before policy expiry. It depends on the policy terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <ShieldCheck size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">
            Travel Insurance Plans
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Secure your journey with comprehensive travel insurance coverage
            across the globe.
          </p>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Types of Travel Insurance
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4 text-orange-600">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Benefits of Travel Insurance
        </h2>

        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-orange-50 border border-orange-100 p-4 rounded-lg"
            >
              <ShieldCheck className="text-orange-600" size={22} />
              <p className="text-gray-700 font-medium">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Who is Eligible?
        </h2>

        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {eligibility.map((e, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border"
            >
              <Users className="text-orange-500" />
              <p className="text-gray-700 font-medium">{e}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Travel Insurance FAQs
        </h2>

        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-semibold text-gray-800">
                  {faq.q}
                </h3>
                {openFAQ === i ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {openFAQ === i && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
