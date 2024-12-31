import React from "react";
import "@/app/globals.css";
import Home from "@/app/home/page";
import About from "@/app/about/page";

export default function Landing() {
  return (
    <div>
      <section className="min-h-screen flex flex-col  ">
        <span> Hi, I&apos;m Julkar and welcome to my page :)</span>
        <br />
        <a href="#hello" className="scroll-cta">
          <div className="line"></div>
          <div className="arrow"></div>
        </a>
      </section>

      <section
        id="hello"
        className="min-h-screen flex justify-center items-center"
      >
        <Home />
      </section>

      <section className="min-h-screen flex justify-center items-center">
        <About />
      </section>
    </div>
  );
}
