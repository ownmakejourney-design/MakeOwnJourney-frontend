"use client";

import { createContext, useContext, useEffect } from "react";
import { lightColors } from "@/theme/colors";

type ThemeContextType = {
  theme: "light";
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;

    // Set CSS variables from light theme
    Object.entries(lightColors).forEach(([key, value]) => {
      // camelCase → kebab-case
      const cssVar = `--${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
      root.style.setProperty(cssVar, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
