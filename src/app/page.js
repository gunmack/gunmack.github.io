"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/app/styles/globals.css";
import "@/app/styles/animations.css";
import Home from "@/app/home/page";

export default function Landing() {
  const [bgImg, setBgImg] = useState("/images/msfs.png");
  const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setBgImg("/images/ats.png");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        window.scrollTo({
          top: 100,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 250,
          behavior: "smooth",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver logic to trigger animation on scroll
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsHomeVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.01, // Trigger animation when 10% of the element is visible
    });

    if (homeRef.current) observer.observe(homeRef.current);
    // if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      // if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat rounded-lg md:p-16 md:m-16 p-2 m-4  "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <section className="min-h-screen md:p-4 p-8 flex flex-col justify-center items-center backdrop-filter backdrop-blur-[8px]">
          <span className="fadeIn anim-1">
            Hi, I&apos;m Julkar and welcome to my portfolio :)
          </span>
          <br />
          <a href="#hello" className="scroll-cta fadeIn anim-2">
            <div className="line"></div>
            <div className="arrow"></div>
          </a>
        </section>
      </div>

      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat rounded-lg  md:p-16 md:m-16 p-2 m-4"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <section
          id="hello"
          ref={homeRef}
          className="min-h-screen md:p-4 p-8 flex justify-center items-center backdrop-filter backdrop-blur-[8px]"
        >
          {isHomeVisible && <Home />}
        </section>
      </div>

      {/* <div
        className="bg-fixed bg-cover bg-center bg-no-repeat rounded-lg  md:p-16 md:m-16 p-2 m-4"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <section
          ref={aboutRef}
          className="min-h-screen flex justify-center items-center opacity-0 transition-opacity duration-1000 ease-in-out md:p-2 backdrop-filter backdrop-blur-[8px]"
        >
          <About />
        </section>
      </div> */}
    </div>
  );
}
