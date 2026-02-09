"use client";

import { useState } from "react";
import { ConfirmationResult } from "firebase/auth";
import api from "@/server/api";

interface OtpVerifyProps {
  confirmationResult: ConfirmationResult;
}

export default function OtpVerify({
  confirmationResult,
}: OtpVerifyProps) {
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      const token = await result.user.getIdToken();

      await api.post(
        "/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Login Successful");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <input
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
}
