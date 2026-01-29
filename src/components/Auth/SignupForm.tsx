"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center gap-8 bg-no-repeat bg-cover text-black "
     >
      <div className="w-[400px]  rounded-md  shadow-md py-5 px-5 shadow-gray-950 flex flex-col ">
        <h1 className="text-3xl font-semibold text-center">Sign Up</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Username */}
          <div>
            <label className="text-sm text-slate-800 hover:text-slate-950">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition focus:border-double"
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
              className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition focus:border-double"
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
              className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition focus:border-double"
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
            className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Create an account
          </button>
            <div>
               <p>Already have an account? <Link href="/auth/login" className="text-blue-600 hover:underline">Sign in</Link>    </p>
            </div>
          {/* Google Signup */}
          <div
            onClick={() => {
                window.location.href = "http://localhost:8084/auth/google";
            }}
            className="flex items-center justify-center gap-3 border border-blue-500 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
            >
            <FcGoogle size={22} />
            <span className="font-medium">Signup with Google</span>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;  
