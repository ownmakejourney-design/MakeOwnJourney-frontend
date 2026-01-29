"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center gap-16 bg-no-repeat bg-cover text-white px-20"
      style={{ backgroundImage: "url('/signupImage.png')" }}
    >
      {/* Left Section */}
      <div className="max-w-[700px]">
        <h2 className="text-6xl font-medium mb-4">
          Welcome Back, Traveler!
        </h2>

        <p className="text-white/80 text-lg mb-8">
          Log in to explore destinations, manage your bookings, and continue
          planning your next unforgettable journey with Make Own Journey.
        </p>

        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
          Sign In
        </button>
      </div>

      {/* Right Card */}
      <div className="w-[400px] bg-[#0b1e33] rounded-xl p-8 flex flex-col gap-5">
        <p className="text-white/80">Make Own Journey</p>
        <h1 className="text-3xl font-semibold">Sign Up</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Username */}
          <div>
            <label className="text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#071423] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#071423] outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="........."
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#071423] outline-none"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>I want to receive updates via email.</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-white text-[#071423] font-semibold py-2 rounded-md hover:opacity-90"
          >
            Create Account
          </button>

          {/* Google Signup */}
          <div
            onClick={() => {
                window.location.href = "http://localhost:8084/auth/google";
            }}
            className="flex items-center justify-center gap-3 border border-blue-500 py-3 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
            >
            <FcGoogle size={22} />
            <span className="font-medium">Signup with Google</span>
            </div>
          {/* Facebook Disabled */}
          <div className="border border-blue-500 text-center py-3 rounded-md opacity-60 cursor-not-allowed">
            Signup with Facebook (Coming Soon)
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={() => {
              window.location.href = "/auth/login";
            }}
            className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
