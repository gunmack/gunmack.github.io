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
  const link = "https://www.sfu.ca/outlines.html?2024/fall/cmpt/276/d200";
  const curr_site = "https://www.gunmack.dev/";
  return (
    <row_col>
      <div>
        <text data-testid="text">
          <p>
            Hi, I&apos;m Julkar and welcome to my page :)
            <br />
            This page was made as part of a lab submission for:
            <br />
            <br />
            <Link className="link" href={link} target="_blank">
              CMPT 276 Fall 2024 D200
            </Link>
            <br />
            <br />
            Feel free to explore using the navbar on top. Although this site is
            <br />
            not yet complete, If you would like to see my other work:
            <br />
            <br />
            <Link className="link" href={curr_site} target="_blank">
              👉 Click here
            </Link>
          </p>
        </text>
      </div>
      <div>
        <Image
          src="/images/grad_pic.png"
          alt="Julkar"
          height={250}
          width={250}
          className="portrait"
        />
      </div>
    </row_col>
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
