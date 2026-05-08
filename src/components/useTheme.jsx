import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(prev => (prev === "dark" ? "light" : "dark")),
  };
};