import React from "react";
import "@/app/globals.css";
import "@/app/animations.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header data-testid="header" className="fadeIn home1">
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
          <p className="fadeIn home2">
            This website is currently a work in progress.
            <br />
            <br />
          </p>
          <p className="fadeIn home2-1">
            This website was created using Next.js and Tailwind CSS.
            <br /> It currently contains:
          </p>
          <br />
          <ul>
            <li>
              {" "}
              <Link className="button fadeIn home3" href="about">
                🧑🏾 About me
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link className="button fadeIn home4" href="projects">
                🖥️ Projects
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link className="button fadeIn home5" href="resume">
                📃 Resume
              </Link>
            </li>
            <br />
            <li>
              <Link
                className="button fadeIn home6"
                href={old_site}
                target="_blank"
              >
                📁 Other work
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="portrait fadeIn pic">
        <Image
          src="/images/grad_pic.png"
          alt="Julkar"
          height={250}
          width={250}
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
