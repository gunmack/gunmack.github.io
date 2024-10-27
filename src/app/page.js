import React from "react";
import "./globals.css";
import Link from "next/link";

function Header() {
  return <header data-testid="header">Hello there!</header>;
}

function Text() {
  const link = "https://www.sfu.ca/outlines.html?2024/fall/cmpt/276/d200";
  const curr_site = "https://www.gunmack.dev/";
  return (
    <div>
      <text data-testid="text">
        <p>
          My name is Julkar and welcome to my page :)
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
