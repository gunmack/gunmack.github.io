import React, { useState, useEffect } from "react";
import { darkmode, LightDark } from "./light_dark";

export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  // Check if localStorage is available and retrieve the dark mode state from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("isDark");
      if (storedDarkMode === "true") {
        setIsDark(true);
      }
    }
  }, []); // This runs once on component mount

  const handleToggle = () => setIsDark(!isDark);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save the dark mode state to localStorage
      localStorage.setItem("isDark", isDark);
      LightDark();
    }
  }, [isDark]); // Runs every time the `isDark` state changes

  return (
    <button
      onClick={() => {
        handleToggle(); // Toggle the state
        darkmode(); // Trigger the dark mode function
      }}
      className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md 
          transform transition-transform duration-500 ${
            isDark ? "translate-x-0 text-white" : "translate-x-8 text-black"
          }`}
      >
        {isDark ? "☀️" : "🌙"}
      </div>
    </button>
  );
}
