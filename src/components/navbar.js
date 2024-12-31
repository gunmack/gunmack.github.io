"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ToggleButton from "@/components/theme_toggle";
import Dropdown from "@/components/dropdown";
import "@/app/globals.css";
import "@/components/components.css";
import TimeUpdater from "@/components/time/fetchTime";

export const links = [
  {
    name: "🏡Home ",
    href: "/",
    key: "home",
  },
  { name: "🧑🏾About me ", href: "about", key: "about" },
  { name: "🖥️Projects ", href: "projects", key: "projects" },
  { name: "📃Resume  ", href: "resume", key: "resume" },
  {
    name: "📁Other work ",
    href: "https://gunmack.github.io/archived/",
    key: "other_work",
  },
  {
    // To trigger dark mode button on navbar
    // name: "",
    // href: "",
    key: "dark-mode",
  },
];

function PagePath() {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "home" : pathname.replace("/", "");
  return currentPage;
}

export default function Navbar() {
  const page = PagePath();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScrollnMouse = (e) => {
      if (window.scrollY > 50 || e.clientY <= 50) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };
    window.addEventListener("scroll", handleScrollnMouse);
    window.addEventListener("mousemove", handleScrollnMouse);
    return () => {
      window.removeEventListener("scroll", handleScrollnMouse);
      window.removeEventListener("mousemove", handleScrollnMouse);
    };
  }, []);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`navbar ${isNavbarVisible ? "visible" : ""}`}>
        <div className="fixed left-10  hidden lg:flex">
          <TimeUpdater />
        </div>
        <div className="hidden sm:flex ">
          {links.map(({ name, href, key }) =>
            key !== "dark-mode" ? (
              <a
                key={key}
                className={`nbar_items ${page === key ? "active" : ""}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={page === key ? { pointerEvents: "none" } : {}}
              >
                {name}
              </a>
            ) : (
              <div key={key} className="dark-mode-toggle">
                <ToggleButton />
              </div>
            ),
          )}
        </div>

        {/* Hamburger menu for small screens */}

        <nbar_items className="sm:hidden flex flex-row items-center">
          <TimeUpdater />
          <a
            onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
            className="px-4"
          >
            <div
              className={`w-8 h-8 flex flex-col justify-between items-center space-y-2 
                transition-transform duration-300 ease-in-out`}
            >
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "w-6 transform rotate-45 translate-y-3.5 "
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "w-6 transform -rotate-45 translate-y-[-14.25px] translate-x-[-1.5px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
            </div>
          </a>
          <div className="dark-mode-toggle">
            <ToggleButton />
          </div>
        </nbar_items>

        {/* Dropdown visible only when `isMenuOpen` is true on small screens */}
        <Dropdown isOpen={isMenuOpen} />
      </div>
    </div>
  );
}
