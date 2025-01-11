"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ToggleButton from "@/components/theme/theme_toggle";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/nav/dropdown";
import "@/app/styles/globals.css";
import "@/components/styles/components.css";
import TimeUpdater from "@/components/time/fetchTime";
import { FaFolderOpen } from "react-icons/fa";
import { FaFaceGrin } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";

export const links = [
  // {
  //   name: "🏡Home ",
  //   href: "/",
  //   key: "home",
  // },
  {
    name: (
      <div className="items-center inline-flex">
        <FaFaceGrin className="mr-2" /> About me
      </div>
    ),
    href: "about",
    key: "about",
  },
  {
    name: (
      <div className="items-center inline-flex">
        <RiComputerLine className="mr-2" /> Projects
      </div>
    ),
    href: "projects",
    key: "projects",
  },
  {
    name: (
      <div className="items-center inline-flex">
        <IoIosDocument className="mr-2" /> Resume
      </div>
    ),
    href: "resume",
    key: "resume",
  },
  {
    name: (
      <div className="items-center inline-flex">
        <FaFolderOpen className="mr-2" /> Other work
      </div>
    ),
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
  const currentPage = pathname === "/" ? "/" : pathname.replace("/", "");

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
        if (page === "/") {
          return setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
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
  }, [page]);

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
        <div className="inline-flex items-center fixed left-10 gap-10">
          <div className=" hidden md:flex">
            <Link href="/">
              <Image
                src="/images/logo.png"
                className="rounded-sm"
                alt="Julkar"
                height={30}
                width={30}
                priority
              />
            </Link>
          </div>
          <div className=" hidden lg:flex">
            <TimeUpdater />
          </div>
        </div>
        <div className="hidden md:flex ">
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

        <nbar_items className="md:hidden flex flex-row items-center">
          <Link href="/" className="fixed left-10">
            <Image
              src="/images/logo.png"
              className="rounded-sm"
              alt="Julkar"
              height={25}
              width={25}
              priority
            />
          </Link>

          <TimeUpdater />
          <div className="dark-mode-toggle">
            <ToggleButton />
          </div>
          <a
            onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
            className="px-4 fixed right-10"
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
        </nbar_items>

        {/* Dropdown visible only when `isMenuOpen` is true on small screens */}
        <Dropdown isOpen={isMenuOpen} />
      </div>
    </div>
  );
}
