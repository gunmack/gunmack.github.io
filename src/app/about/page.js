import React from "react";
import Link from "next/link";
import "@/app/globals.css";

function Header() {
  return <header data-testid="header">What I do</header>;
}

function Text() {
  // const resume = "/files/Julkar_Reedoy_resume.pdf";
  return (
    <div>
      <text data-testid="text">
        <p>
          I am a 2nd year Computing Science Student at Simon Fraser University.{" "}
          <br></br>
          My preferred languages are:<br></br>
          <br></br>
        </p>

        <ul>
          <li>👉 Python</li>
          <li>👉 Java</li>
          <li>👉 JavaScript</li>
          <li>👉 C</li>
        </ul>
        <br></br>

        <p>
          I mostly work on front-end applications with React and Python.
          <br></br>I have experience working with abstract data structures in C
          and C++.<br></br>
          Currently, I am learning Object Oriented Programming with Java.
          <br></br>
          <br></br>Take a look at my resume by clicking on this little icon 👉
          {""}
          <Link href="resume" className="link">
            📃
          </Link>
        </p>
      </text>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Header />
      <Text />
    </div>
  );
}
