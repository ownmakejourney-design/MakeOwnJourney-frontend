"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/server/api";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const [mode, setMode] = useState<"email" | "phone" | "otp">("email");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  // 🔐 Email Login
  const handleEmailLogin = async () => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("accessToken", res.data.token);
    router.push("/");
  };

  // 📲 Send OTP
  const handleSendOtp = async () => {
    await api.post("/auth/send-otp", { phone });
    setMode("otp");
  };

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {
    const res = await api.post("/auth/verify-otp", { phone, otp });
    localStorage.setItem("accessToken", res.data.token);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover text-black">
      <div className="w-[400px] rounded-md shadow-md py-6 px-6 shadow-gray-950 flex flex-col gap-4 bg-white">
        <h1 className="text-3xl font-semibold text-center">Login</h1>

        {/* 🔹 EMAIL LOGIN */}
        {mode === "email" && (
          <>
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="........."
                className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition"
              />
            </div>

            <button
              onClick={handleEmailLogin}
              className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Login
            </button>

            <p
              className="text-right text-blue-600 hover:underline cursor-pointer text-sm"
              onClick={() => setMode("phone")}
            >
              Login with phone
            </p>
          </>
        )}

        {/* 🔹 PHONE LOGIN */}
        {mode === "phone" && (
          <>
            <div>
              <label className="text-sm">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9198xxxxxxx"
                className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition"
              />
            </div>

            <button
              onClick={handleSendOtp}
              className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Continue
            </button>

            <p
              className="text-right text-blue-600 hover:underline cursor-pointer text-sm"
              onClick={() => setMode("email")}
            >
              Login with email
            </p>
          </>
        )}

        {/* 🔹 OTP VERIFY */}
        {mode === "otp" && (
          <>
            <div>
              <label className="text-sm">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full mt-1 px-3 py-2 rounded-md outline-none border border-gray-700 hover:border-blue-500 transition"
              />
            </div>

            <button
              onClick={handleVerifyOtp}
              className="border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Verify OTP
            </button>
          </>
        )}

        {/* 🔹 GOOGLE LOGIN */}
        <div
          onClick={() =>
            (window.location.href = "http://localhost:8084/auth/google")
          }
          className="flex items-center justify-center gap-3 border border-blue-500 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          <FcGoogle size={22} />
          <span className="font-medium">Login with Google</span>
        </div>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
