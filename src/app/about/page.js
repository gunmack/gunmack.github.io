import React from "react";
import "@/app/globals.css";
import "@/app/animations.css";
import "@/app/about/about.css";

function Header() {
  return <header data-testid="header">What I do</header>;
}

function Text() {
  // const resume = "/files/Julkar_Reedoy_resume.pdf";
  return (
    <div className="row_col">
      <div>
        <div data-testid="text" className="text">
          <p>
            I am a 3rd year Computing Science Student at Simon Fraser
            University. <br></br>
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
            <br></br>
            I also have experience in working with backend APIs using Java.
            <br />
            <br />
            Currently, I am learning to develop full stack applications.
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="fadeIn">
      <Header />
      <Text />
    </div>
  );
}
