"use client";
import React, { useEffect, useState } from "react";
import "@/components/styles/components.css";
import "@/app/styles/globals.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaSteam } from "react-icons/fa";

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
            <FaLinkedin className="text-xl" />
          </a>
          <a
            className="f_items "
            href="https://github.com/gunmack"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            className="f_items "
            href="https://steamcommunity.com/id/gunmack/"
            target="_blank"
            rel="noreferrer"
          >
            <FaSteam className="text-xl" />
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
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noreferrer"
          >
            Icons
          </a>
          <div>© 2025 Julkar Reedoy (jreed)</div>
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
