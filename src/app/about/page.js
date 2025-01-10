import React from "react";
import "@/app/globals.css";
import "@/app/animations.css";
import "@/app/about/about.css";

function Header() {
  return (
    <header data-testid="header" className="fadeIn about1">
      What I do
    </header>
  );
}

function Text() {
  // const resume = "/files/Julkar_Reedoy_resume.pdf";
  return (
    <div className="row_col">
      <div>
        <div data-testid="text" className="text">
          <p className="fadeIn about2">
            I am a 3rd year Computing Science Student at Simon Fraser
            University. <br></br>
            My preferred languages are:<br></br>
            <br></br>
          </p>

          <ul>
            <li className="fadeIn about3">👉 Python</li>
            <li className="fadeIn about4">👉 Java</li>
            <li className="fadeIn about5">👉 JavaScript</li>
            <li className="fadeIn about6">👉 C</li>
          </ul>
          <br></br>

          <p className="fadeIn about7">
            I mostly work on front-end applications with React and Python.
            <br></br>I also have experience in working with backend APIs using
            Java.
          </p>
          <br />
          <br />
          <p className="fadeIn about8">
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
    <div>
      <Header />
      <Text />
    </div>
  );
}
