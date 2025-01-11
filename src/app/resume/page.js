import React from "react";
import Link from "next/link";
import "@/app/styles/globals.css";
import "@/app/styles/animations.css";
import "@/app/resume/resume.css";
import Resume_PDF from "@/app/resume/pdf";
import { IoIosDocument } from "react-icons/io";

function linkToCopy() {
  const resume = "/files/Julkar_Reedoy_resume.pdf";
  return (
    <div>
      <br />
      <br />
      <div className="text">
        <div className="flex items-center">
          Looking to download a copy? Click
          <Link href={resume} className="link" target="_blank">
            <IoIosDocument className="hover:text-2xl transition-all duration-500 ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="fadeIn">
      {/* <Header /> */}
      <Resume_PDF />
      {linkToCopy()}
    </div>
  );
}
