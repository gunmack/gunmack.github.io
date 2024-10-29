import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";

function Header() {
  return <header data-testid="header">Projects</header>;
}

function Text() {
  const link = "https://github.com/gunmack";
  return (
    <div>
      <p data-testid="text">
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

function Descriptions() {
  return (
    <div>
      <row_col>
        <div>
          <a
            className="link"
            href="https://github.com/gunmack/Python-Image-Processor"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-lg"
              src={"/images/project_1.png"}
              alt="project_1"
              width={200}
              height={200}
            />
          </a>
          <br />
          <text>
            <h3>Python Image Processor</h3>
            <p>
              <em>
                Final project for CMPT 120,
                <br /> Fall 2021 @ Simon Fraser University
              </em>
            </p>
            <p>
              <strong>Built with:</strong>
            </p>
            <ul>
              <li>- Numpy</li>
              <li>- Pygame</li>
              <li>- Tkinter</li>
            </ul>
          </text>
        </div>
        <div>
          <a
            className="link"
            href="https://www.gunmack.dev/SFU"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-lg"
              src={"/images/sfu.png"}
              alt="project_2"
              width={500}
              height={500}
            />
          </a>
          <br />
          <text>
            <h3>SFU Campus Timeline</h3>
            <p>
              <em>Comprehensive HTML directory of SFU campus buildings</em>
            </p>
            <p>
              <strong>Built with:</strong>
            </p>
            <ul>
              <li> - HTML</li>
              <li>- Bootstrap CSS</li>
            </ul>
          </text>
        </div>
      </row_col>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div>
        <Descriptions />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Text />
    </div>
  );
}
