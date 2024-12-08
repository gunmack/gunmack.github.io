import React from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header data-testid="header">
      Hello{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </header>
  );
}

function Text() {
  // const link = "https://www.sfu.ca/outlines.html?2024/fall/cmpt/276/d200";
  const curr_site = "https://www.gunmack.dev/";
  return (
    <div className="row_col">
      <div>
        <div data-testid="text" className="text">
          <p>
            Hi, I&apos;m Julkar and welcome to my page :)
            <br />
            This website is currently a work in progress.
            <br />
            <br />
          </p>
          <p>
            This website was created using Next.js and Tailwind CSS.
            <br /> It currently contains:
          </p>
          <br />
          <ul>
            <li>
              {" "}
              <Link className="link" href="about" target="_blank">
                🧑🏾 About me
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" href="projects" target="_blank">
                🖥️ Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" href="resume" target="_blank">
                📃 Resume
              </Link>
            </li>
          </ul>
          <p>
            <br /> If you would like to see my other work:
            <br />
            Click here 👉
            <Link className="link" href={curr_site} target="_blank">
              📁Other work
            </Link>
          </p>
        </div>
      </div>
      <br />
      <div>
        <Image
          src="/images/grad_pic.png"
          alt="Julkar"
          height={250}
          width={250}
          className="portrait"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <Text />
    </div>
  );
}
