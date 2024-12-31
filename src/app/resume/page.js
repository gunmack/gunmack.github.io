import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/resume/resume.css";
import Resume_PDF from "@/app/resume/pdf";

function linkToCopy() {
  const resume = "/files/Julkar_Reedoy_resume.pdf";
  return (
    <div>
      <br />
      <br />
      <div className="text">
        <p>
          Looking to download a copy? Click 👉{""}
          <Link href={resume} className="link" target="_blank">
            📃
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      {/* <Header /> */}
      <Resume_PDF />
      {linkToCopy()}
    </div>
  );
}
