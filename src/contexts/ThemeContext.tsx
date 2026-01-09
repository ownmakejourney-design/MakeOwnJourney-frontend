"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { lightColors } from "@/theme/colors";

type Theme = "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme] = useState<Theme>("light");

  const toggleTheme = () => {
    // future: dark mode
  };

  useEffect(() => {
    Object.entries(lightColors).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
      document.documentElement.style.setProperty(cssVar, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
