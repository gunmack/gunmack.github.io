"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { darkmode, LightDark } from "@/components/light_dark";
import Dropdown from "@/components/dropdown";
import "@/app/globals.css";

export const links = [
  {
    name: "🏠Home ",
    href: "/",
    key: "home",
  },
  { name: "🧑🏾About me ", href: "about", key: "about" },
  { name: "🖥️Projects ", href: "projects", key: "projects" },
  { name: "📃Resume ", href: "resume", key: "resume" },
  {
    name: "📁Other work ",
    href: "https://www.gunmack.dev/",
    key: "other_work",
  },
  { name: "☾☀︎", key: "dark-mode" },
];

function PagePath() {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "home" : pathname.replace("/", "");
  return currentPage;
}

export default function Navbar() {
  const page = PagePath();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    LightDark();

    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <navbar>
        <div className="hidden sm:flex">
          {links.map(({ name, href, key }) =>
            key !== "dark-mode" ? (
              <a
                key={key}
                className={`nbar_items ${page === key ? "active" : ""}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ) : (
              <button
                key={key} // Keep the 'key' prop for the button
                className="nbar_items"
                onClick={darkmode} // Dark mode toggle directly without checking key here
                aria-label="Toggle dark mode"
              >
                {name}
              </button>
            ),
          )}
        </div>

        {/* Hamburger menu for small screens */}
        <nbar_items
          className="sm:hidden"
          onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2YW0hTcRzHj7t7oaSHCkqQinyoB8PclVroDm0MiaLo4oUuT0WgaaldBOeDKwwqA2VYNM1Fdjcl2rp4rczs5jJKTWWb08070oVevnHWgoJJnqnziOcDHxjnx86+X3b4HfgTBAsLCwvLbNH+QC0cMGlj3OXqA+5r6otuk9riuqZucZs0nW6Txu02aX54pT53/p6pLW6TppD6zoBJG0PdI6Chu68oRX1lZEK/kSzrN5LjrlISU/S7y6iqchnjU1w3lGEzFnzYoFrYV6LMdZYox/oubcJM6KTuXaLMHbyqXjCt4R3F8r29RYqh3mIFAmKRYoj6zSkHb7+wSugoFJc7CsXw5di9JIzdTfI5mybLqQx+hW8xxPBtBdGVtrPrMJGjdxIxemfPhPNpsSC6kspCu0B3/pqTPfq1+Fsq7Ojt3f9cC4Td+jUnaBf4ols92JUXhb8dubULI7d2/nMtQA7QL5CzAkySoEtHdgSYJEGXz0eWNHxOXwom+Cl9ST3hDzGNOjBBwl/mbIFWGVdrlXMc93csx3G9BlsrDmKjJRvSuhyQ1enYb0jE+bRY1GxehHNpYuwzJIGszvDMN5qzsKXiII7ptajYHonr2yNxVK/FlopD2GA5DkldDlRVGUgxJONMqhRV5GKcTpUi2ZCM+KoMz3yDORsJ1w8hNT8Bxm0rYYkNs5vXh2gmXeCDnGO3yjlolXM9vpdz8U7GxVsZz+MbGQ+vPfLRIuPjlYyPZpkAzVIBXkoFaPIoxAupEM+lQjzzKEKjVIQGSokI9ZJg1EmCUeu1RhKCp16fSELxWByKR14t4jCYxWE2OgXAwAKYP/9Am4Krsco5dgYVsD2MDVETdPnZRoAJEv4yZwu0etco3UfoTZwA1l18fDrMQ4+OB2cRF4M3ORivDfpvyK9NQWg9LPT9CDFhjb6MF+LtbgE+pvHRlc+D8zIXw9UcfGsOQp+Ri0ZV8LSuUXYLNTFhC4WfigMTJPxltoOHz+sC/aWqZ64yEkywv4xsoF0gYIdYxZOTdoEZPevxQ4IuXXlR9lk4PoFPdVGTf4n9oTNzmaYjK8LekRWB2bQ9M8LWkb2c/juAhYWFhYWFmAP8Am1VLXDcxP8IAAAAAElFTkSuQmCC"
            alt="Hamburger icon"
          ></img>
        </nbar_items>

        {/* Dropdown visible only when `isMenuOpen` is true on small screens */}
        <Dropdown isOpen={isMenuOpen} />
      </navbar>
    </div>
  );
}
