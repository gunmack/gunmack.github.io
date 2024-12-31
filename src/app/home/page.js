import React from "react";
import "@/app/globals.css";
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
  const old_site = "https://gunmack.github.io/archived/";
  return (
    <div className="row_col">
      <div>
        <div data-testid="text" className="text">
          <p>
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
              <Link className="button" href="about">
                🧑🏾 About me
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link className="button" href="projects">
                🖥️ Projects
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link className="button" href="resume">
                📃 Resume
              </Link>
            </li>
            <br />
            <li>
              <Link className="button" href={old_site} target="_blank">
                📁 Other work
              </Link>
            </li>
          </ul>
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
          priority
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
