import React, { useState, useEffect } from "react";
import { darkmode, LightDark } from "@/components/theme/light_dark";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  // Check if localStorage is available and retrieve the dark mode state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("theme");
      if (storedDarkMode === "dark") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
      LightDark();
    }
  }, []); // This runs once on component mount

  const handleToggle = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
    darkmode(); // Trigger the dark mode function
  };

  return (
    <button
      onClick={() => {
        handleToggle(); // Toggle the state
      }}
      className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-500 ${
        isDark ? "bg-white" : "bg-black"
      }`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full 
          transform transition-transform duration-500 ${
            isDark ? "translate-x-0" : "translate-x-8"
          }`}
      >
        {isDark ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}
