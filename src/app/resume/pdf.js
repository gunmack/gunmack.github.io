// "use client";
import React from "react";
import "@/app/globals.css";
import "@/app/resume/resume.css";

function Resume_PDF() {
  return (
    <div>
      {/* <div className="left-nav">
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
        </ul>
      </div> */}
      <div data-testid="pdf" className="pdf">
        <pdf_title>Julkar Naine Reedoy</pdf_title>
        <div>
          <p>
            Email:{""}
            <a
              className="link"
              href="#"
              style={{ wordWrap: "break-word", wordBreak: "break-word" }}
            >
              julkar<code>[dash]</code>reedoy{""}
              <code>[at]</code>
              {""}
              sfu<code>[dot]</code>ca
            </a>{" "}
            <br /> GitHub:{""}
            <a
              id="skills"
              className="link"
              href="https://github.com/gunmack"
              target="_blank"
              rel="noreferrer"
              style={{ wordWrap: "break-word", wordBreak: "break-word" }}
            >
              github.com/gunmack
            </a>{" "}
            <br /> LinkedIn:{""}
            <a
              className="link"
              href="https://www.linkedin.com/in/jreedoy/"
              target="_blank"
              rel="noreferrer"
              style={{ wordWrap: "break-word", wordBreak: "break-word" }}
            >
              linkedin.com/in/jreedoy
            </a>
            <br />
            <br />
          </p>
        </div>

        <pdf_header>Skills</pdf_header>
        <pdf_div>
          <pdf_text>
            <p>
              Languages:
              <strong>
                {" "}
                C, C++, Python, Java, JavaScript, SQL, HTML, CSS{" "}
              </strong>
            </p>
            <p>
              Tools:
              <strong>
                {" "}
                React, Next.js, Flask, Spring Boot, PostgreSQL, Google Cloud
                Platform, Docker
              </strong>
            </p>
          </pdf_text>
        </pdf_div>

        <pdf_header>Projects</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/QuizLing"
                target="_blank"
                rel="noreferrer"
              >
                QuizLing
              </a>
              <p className="text-right"> November 2024</p>
            </h3>

            <ul>
              <li>
                👉 Integrated Google Account authentication to provide seamless
                user login through Google Firebase Authentication.
              </li>
              <li>
                👉 Developed an Achievements feature allowing users to monitor
                their in-app progress with real-time updates powered by Google
                Firebase Realtime Database.
              </li>
              <li>
                👉 Optimized application development workflows to meet deadlines
                and ensure quality control by enhancing the development
                environment and streamlining the CI/CD pipeline.
              </li>
              <li>
                👉 Designed and implemented a Translate feature enabling users
                to translate text to their desired language by utilizing the
                Google Cloud Translation API.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/Calc-it"
                target="_blank"
                rel="noreferrer"
              >
                Calc-it
              </a>
              <p className="text-right"> August 2024</p>
            </h3>

            <ul>
              <li>
                👉 Built a calculator web application for performing basic
                mathematical operations using the Flask framework.
              </li>
              <li>
                👉 Designed an intuitive user interface to enable seamless user
                interaction with HTML, CSS, and JavaScript.
              </li>
              <li>
                👉 Optimized input parsing and tokenization for efficient
                processing of mathematical expressions using regular expressions
                (regex).
              </li>
              <li>
                👉 Implemented key features such as input clearing to enhance
                user control through JavaScript functions.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/SFU-Campus-Timeline"
                target="_blank"
                rel="noreferrer"
              >
                SFU Campus Timeline
              </a>
              <p className="text-right">Spring 2023</p>
            </h3>

            <ul>
              <li>
                👉 Leveraged the Bootstrap CSS framework to create a structured
                directory of HTML pages to organize buildings by campuses and
                opening dates.
              </li>
              <li>
                👉 Integrated interactive maps to display approximate building
                locations using the Leaflet Maps Library.
              </li>
              <li>
                👉 Created dynamic slideshows to showcase campus building images
                utilizing Bootstrap components.
              </li>
              <li>
                👉 Implemented a sticky navigation bar to enhance usability and
                streamline site navigation.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Open Source</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://new.sfucsss.org/#"
                target="_blank"
                rel="noreferrer"
              >
                CSSS-Site-New
              </a>
              <p className="text-right">August 2024</p>
            </h3>

            <ul>
              <li>
                👉 Developed a dedicated page for the CSSS common rooms to
                showcase images and other information using React.js.
              </li>
              <li>
                👉 Created an interactive page to display detailed information
                about all CSSS committees using React.js.
              </li>
              <li>
                👉 Integrated new database tables for storing blog entries and
                poster information into the existing schema using SQLAlchemy, as
                well as executing seamless migrations with Alembic scripts.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Work Experience</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>Concession @ PNE</h3>
            <ul>
              <li>
                👉 Managed POS systems, coordinated with kitchen staff to
                expedite orders, ensuring exceptional service.
              </li>
            </ul>
            <h3>Produce Clerk @ Loblaws</h3>
            <ul>
              <li>
                👉 Maintained produce department to standard, ensuring stock
                freshness and providing exceptional customer assistance.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Education</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>
              Simon Fraser University{" "}
              <p className="text-right">September 2021 - Present</p>
            </h3>
            <ul>
              <li>👉 Bachelor of Science in Computing Science</li>
            </ul>
          </pdf_text>
        </pdf_div>
      </div>
    </div>
  );
}

export default Resume_PDF;
