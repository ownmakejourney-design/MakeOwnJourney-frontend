"use client";

export default function LoginForm() {
  return (
    <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6">
        Login / Sign Up
      </h2>

      <input
        type="text"
        placeholder="Email or Phone"
        className="w-full border rounded-lg p-3 mb-4 focus:outline-primary"
      />

      <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
        Continue
      </button>

      <p className="text-sm text-center text-gray-500 mt-6">
        By continuing, you agree to our{" "}
        <span className="text-primary cursor-pointer">Terms & Privacy</span>
      </p>
    </div>
  );
}
