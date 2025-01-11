import React from "react";
import Link from "next/link";
import "@/app/styles/globals.css";
import "@/app/styles/animations.css";
import "@/app/projects/project.css";
import Content from "@/app/projects/content";
import { FaSquareGithub } from "react-icons/fa6";

function Header() {
  return <header data-testid="header">My Projects</header>;
}

function Text() {
  return (
    <div
      data-testid="text"
      className="fadeIn projects5 flex justify-center items-center"
    >
      <div className="text-center">
        <p>
          While I work on this page,
          <br /> feel free to look at my GitHub!!
        </p>
        <br />
        <div className="inline-flex justify-center proj-button">
          <GitHubButton />
        </div>
      </div>
    </div>
  );
}

function GitHubButton() {
  const link = "https://github.com/gunmack";
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <FaSquareGithub />
    </Link>
  );
}

export default function Projects() {
  return (
    <div>
      <Header />
      <Content />

      <br />
      <Text />
    </div>
  );
}
