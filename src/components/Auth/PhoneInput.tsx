"use client";

import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

interface PhoneInputProps {
  onOtpSent: (result: ConfirmationResult) => void;
}

export default function PhoneInput({ onOtpSent }: PhoneInputProps) {
  const [phone, setPhone] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      setRecaptchaReady(true);
    }
  }, []);

  const sendOtp = async () => {
    try {
      if (!recaptchaReady) {
        alert("Recaptcha not ready");
        return;
      }

      const appVerifier = (window as any).recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier
      );

      onOtpSent(confirmationResult);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  return (
    <div>
      <input
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOtp}>Send OTP</button>

      <div id="recaptcha-container"></div>
    </div>
  );
}
