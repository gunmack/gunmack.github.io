import React from "react";
import "@/app/globals.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer>
        <button
          className="f_items"
          href="https://www.linkedin.com/in/jreedoy/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/linkedIn.png"}
            alt="LinkedIn logo"
            width={20}
            height={20}
          ></Image>
          LinkedIn
        </button>
        <button
          className="f_items"
          href="https://github.com/gunmack"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="bg-white rounded-full"
            src={"/images/gitHub.png"}
            alt="GitHub logo"
            width={20}
            height={20}
          ></Image>
          GitHub
        </button>
        <a
          className="link"
          href="mailto:julkar_reedoy@sfu.ca?subject=Feedback on your GitHub page"
          target="_blank"
          rel="noreferrer"
        >
          Give Feedback
        </a>
        <a
          className="link"
          href="https://icons8.com/"
          target="_blank"
          rel="noreferrer"
        >
          Icons by Icons8
        </a>
        <a
          className="link"
          href="https://emojipedia.org/"
          target="_blank"
          rel="noreferrer"
        >
          Emojis from Emojipedia
        </a>
      </footer>
    </div>
  );
}
