"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EnquiryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pkg = searchParams.get("package");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    pax: "",
    fromCity: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Enquiry Data:", { ...form, package: pkg });

    alert("Enquiry submitted successfully!");
    router.push(`/package/${pkg}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 🔲 BLURRED BACKGROUND */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* 🧾 FORM CARD */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
            Instant Booking Get 25% OFF
          </span>

          <h1 className="text-2xl font-bold">
            Hi  Enquiry Now To Get Best Offer!!!
          </h1>

          {pkg && (
            <p className="text-gray-600 mt-2">
              Package: <b className="capitalize">{pkg.replace(/-/g, " ")}</b>
            </p>
          )}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile"
              required
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="date"
              name="travelDate"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              name="pax"
              placeholder="No of Pax"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="fromCity"
              placeholder="From City"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-bold mt-4"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
