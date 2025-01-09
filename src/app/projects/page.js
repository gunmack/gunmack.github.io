import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/animations.css";
import "@/app/projects/project.css";
import Content from "@/app/projects/content";

function Header() {
  return <header data-testid="header">My Projects</header>;
}

function Text() {
  const link = "https://github.com/gunmack";
  return (
    <div data-testid="text">
      <p>
        While I work on this page,<br></br>
        feel free to take a look at
        <br />
        <br />
        <Link href={link} className="button" target="_blank">
          my GitHub
        </Link>
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="fadeIn">
      <Header />
      <Content />
      <br />
      <br />
      <Text />
    </div>
  );
}
