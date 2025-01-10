import React from "react";
import "@/app/styles/globals.css";
import "@/app/styles/animations.css";
import "@/app/projects/project.css";
import Image from "next/image";

function project4() {
  return (
    <div className="click_div group relative fadeIn projects4">
      <a
        href="https://github.com/gunmack/Python-Image-Processor"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="rounded-lg"
          src={"/images/project_1.png"}
          alt="project_4"
          width={150}
          height={0}
          priority
        />
        <br />
        <div className="text md:max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-1000">
          <h3>Python Image Processor</h3>
          <p>
            <em>
              A variety of color filters and other features for image processing
            </em>
          </p>
          <p>Built with:</p>
          <ul>
            <li>👉 Numpy</li>
            <li>👉 Pygame</li>
            <li>👉 Tkinter</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

function project3() {
  return (
    <div className="click_div group relative fadeIn projects3">
      <a
        href="https://github.com/gunmack/SFU-Campus-Timeline"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="rounded-lg"
          src={"/images/sfu.png"}
          alt="project_3"
          width={150}
          height={0}
          priority
        />
        <br />

        <div className="text md:max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-1000">
          <h3>SFU Campus Timeline</h3>
          <p>
            <em>Comprehensive HTML directory of SFU campus buildings</em>
          </p>
          <p>Built with:</p>
          <ul>
            <li>👉 HTML</li>
            <li>👉 Bootstrap CSS</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

function project2() {
  return (
    <div className="click_div group relative fadeIn projects2">
      <a
        href="https://github.com/gunmack/Calc-it"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="rounded-lg"
          src={"/images/flask.png"}
          alt="project_2"
          width={150}
          height={0}
          priority
        />
        <br />
        <div className="text md:max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-1000">
          <h3>Calc-it</h3>
          <p>
            <em>Web calculator built with Python 3.12 and Flask 3.0.3.</em>
          </p>
          <p>Components:</p>
          <ul>
            <li>👉 Regular Expressions</li>
            <li>👉 HTML embedded into python for client side view</li>
            <li>👉 Flask framework</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

function project1() {
  return (
    <div className="click_div group relative fadeIn projects1">
      <a
        href="https://github.com/gunmack/QuizLing"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="rounded-lg bg-white"
          src={"/images/quizLing.jpg"}
          alt="project_1"
          width={150}
          height={0}
          priority
        />
        <br />
        <div className="text md:max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-1000">
          <h3>QuizLing</h3>
          <p>
            <em>Language Learning App built with Next.js</em>
          </p>
          <p>Utilizes:</p>
          <ul>
            <li>👉 Google Cloud APIs</li>
            <li>👉 Google Cloud Firebase for Authentication</li>
            <li>
              👉 Google Cloud Firebase Realtime Database for storing user
              progress
            </li>
            <li>👉 Deployed on Vercel</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

export default function Content() {
  return (
    <div data-testid="content">
      <div className="row_col ">
        {project1()}
        {project2()}
      </div>
      <div className="row_col">
        {project3()} {project4()}
      </div>
    </div>
  );
}
