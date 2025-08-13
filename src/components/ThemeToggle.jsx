import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  // Start with dark mode as default
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  }, [dark]);

  useEffect(() => {
    // Check if user had a saved theme
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        setDark(saved === "dark");
      }
    } catch {}
  }, []);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
