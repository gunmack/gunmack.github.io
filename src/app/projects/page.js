import React from "react";
import Link from "next/link";
import "@/app/globals.css";

function Header() {
  return <header data-testid="header">Projects</header>;
}

function Text() {
  const link = "https://github.com/gunmack";
  return (
    <div>
      <text data-testid="text">
        <p>
          While I work on this page,<br></br>
          feel free to take a look at
          <br />
          👉{" "}
          <Link href={link} className="link" target="_blank">
            my GitHub
          </Link>
        </p>
        <br />
        <br /> <br />
        <br />
      </text>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <Header />
      <Text />
    </div>
  );
}
