"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EnquiryClient() {
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
      {/* Background blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-xl text-gray-500"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-2">
          Enquiry Now To Get Best Offer
        </h1>

        {pkg && (
          <p className="text-gray-600 mb-4">
            Package: <b className="capitalize">{pkg.replace(/-/g, " ")}</b>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" required onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="phone" placeholder="Mobile" required onChange={handleChange} className="w-full border p-3 rounded" />
          <button className="w-full bg-blue-600 text-white py-3 rounded font-bold">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
