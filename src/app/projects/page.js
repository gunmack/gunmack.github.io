import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import Content from "./content";

function Text() {
  const link = "https://github.com/gunmack";
  return (
    <div data-testid="text">
      <p>
        While I work on this page,<br></br>
        feel free to take a look at
        <br />
        👉{" "}
        <Link href={link} className="link" target="_blank">
          my GitHub
        </Link>
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <div>
        <Content />
      </div>
      <Text />
    </div>
  );
}
