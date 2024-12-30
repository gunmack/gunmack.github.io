import React from "react";
import "@/app/globals.css";

export default function Landing() {
  return (
    <div>
      <section className="hero">
        {/* <h1>Welcome to My Website</h1>
        <p>Discover my projects, skills, and experiences below.</p> */}

        <span>Scroll Down to Learn More</span>
        <br />
        <a href="/home" className="scroll-cta">
          <div className="line"></div>

          <div className="arrow"></div>
        </a>
      </section>
    </div>
  );
}
