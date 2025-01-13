import React from "react";
import "@/app/styles/globals.css";
import "@/app/styles/animations.css";
import Link from "next/link";
import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";
import { FaFaceGrin } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";

function Header() {
  return (
    <header data-testid="header" className="fadeIn home1">
      Hello{" "}
      <span role="img" aria-label="wave">
        &#128075;
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
            Powered by Next.js and the magic of CSS, it currently contains:
          </p>
          <br />
          <ul>
            <li>
              {" "}
              <Link
                className="button fadeIn home3 items-center inline-flex "
                href="about"
              >
                <FaFaceGrin className="mr-1 md:mr-2" /> About me
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link
                className="button fadeIn home4 items-center inline-flex"
                href="projects"
              >
                <RiComputerLine className="mr-1 md:mr-2" /> Projects
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link
                className="button fadeIn home5 items-center inline-flex"
                href="resume"
              >
                <IoIosDocument className="mr-1 md:mr-2" /> Resume
              </Link>
            </li>
            <br />
            <li>
              <Link
                className="button fadeIn home6 items-center inline-flex"
                href={old_site}
                target="_blank"
              >
                <FaFolderOpen className="mr-1 md:mr-2" /> Other work
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
