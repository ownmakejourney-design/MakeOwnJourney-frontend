"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-buttonText px-4 py-2 rounded"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
