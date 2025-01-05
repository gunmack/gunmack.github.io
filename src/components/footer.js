"use client";
import React, { useEffect, useState } from "react";
import "@/components/components.css";
import "@/app/globals.css";
import Image from "next/image";

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchLastUpdated = async () => {
      try {
        const response = await fetch("/last-updated.json");
        if (!response.ok) {
          console.log(`HTTP log! status: ${response.status}`);
        }
        const data = await response.json();
        setLastUpdated(data.lastUpdated);
      } catch (error) {
        console.log("Error fetching the last updated timestamp:", error);
      }
    };

    fetchLastUpdated();
  }, []);

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
          </a>
          <a
            className="f_items "
            href="https://steamcommunity.com/id/gunmack/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="bg-white rounded-full"
              src={"/images/steam.png"}
              alt="Steam logo"
              width={20}
              height={20}
            />
          </a>
          <a
            className="f_items"
            href="mailto:julkar_reedoy@sfu.ca?subject=Feedback on your personal website"
            target="_blank"
            rel="noreferrer"
          >
            Feedback
          </a>
          <a
            className="f_items"
            href="https://emojipedia.org/"
            target="_blank"
            rel="noreferrer"
          >
            Emojis
          </a>
          <div>© 2024 Julkar Reedoy (jreed). All rights reserved.</div>
          <div>
            Last updated:{" "}
            {lastUpdated || (
              <span>
                Loading <span className="blink">...</span>
              </span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
