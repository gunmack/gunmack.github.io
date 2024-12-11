import React from "react";
import "@/app/globals.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer_section">
      <footer>
        {/* Footer Links Section */}
        <div className="footer flex flex-wrap">
          <a
            className="f_items "
            href="https://www.linkedin.com/in/jreedoy/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/images/linkedIn.png"}
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
            LinkedIn
          </a>
          <a
            className="f_items "
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
            />
            GitHub
          </a>
          <a
            className="f_items"
            href="mailto:julkar_reedoy@sfu.ca?subject=Feedback on your GitHub page"
            target="_blank"
            rel="noreferrer"
          >
            Give Feedback
          </a>
          <a
            className="f_items"
            href="https://icons8.com/"
            target="_blank"
            rel="noreferrer"
          >
            Icons by Icons8
          </a>
          <a
            className="f_items"
            href="https://emojipedia.org/"
            target="_blank"
            rel="noreferrer"
          >
            Emojis from Emojipedia
          </a>
        </div>
        {/* Copyright Section */}
        <div className="pl-2 pb-1 right-0">
          © 2024 Julkar Reedoy (jreed). All rights reserved.
        </div>
      </footer>
    </div>
  );
}
