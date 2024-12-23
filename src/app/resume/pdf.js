"use client";
import React from "react";
import "@/app/globals.css";

function Resume_PDF() {
  return (
    <div>
      <div className="left-nav">
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
      </div>
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
              <strong> Python, Java, JavaScript, SQL, HTML, CSS </strong>
            </p>
            <p id="projects">
              Frameworks:
              <strong> React, Tailwind, Flask, Bootstrap, Spring boot</strong>
            </p>
            <p>
              Tools:<strong> Git, Linux, JIRA, Microsoft Office </strong>
            </p>
          </pdf_text>
        </pdf_div>

        <pdf_header>Projects</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/calculator"
                target="_blank"
                rel="noreferrer"
              >
                QuizLing
              </a>
              <p className="text-right"> November 2024</p>
            </h3>

            <ul>
              <li>
                👉{" "}
                <strong>
                  <i>Optimized application development workflows</i>
                </strong>{" "}
                to meet deadlines and ensure quality control by enhancing the
                development environment and streamlining the CI/CD pipeline.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Designed and implemented a Translate feature</i>
                </strong>{" "}
                enabling users to translate text to their desired language by
                utilizing the Google Cloud Translation API.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Integrated Google Account authentication</i>
                </strong>{" "}
                to provide seamless user login through Google Firebase
                Authentication.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Developed an Achievements feature</i>
                </strong>{" "}
                allowing users to monitor their in-app progress with real-time
                updates powered by Google Firebase Realtime Database.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/calculator"
                target="_blank"
                rel="noreferrer"
              >
                Calculator Web Application
              </a>
              <p className="text-right"> August 2024</p>
            </h3>

            <ul>
              <li>
                👉{" "}
                <strong>
                  <i>Built a calculator web application</i>
                </strong>{" "}
                for performing basic mathematical operations using the Flask
                framework.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Designed an intuitive user interface</i>
                </strong>{" "}
                to enable seamless user interaction with HTM, CSS, and
                JavaScript.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Optimized input parsing and tokenization</i>
                </strong>{" "}
                for efficient processing of mathematical expressions using
                regular expressions (regex).
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Implemented key features</i>
                </strong>{" "}
                such as input clearing to enhance user control and experience
                through JavaScript functions.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://www.gunmack.dev/SFU"
                target="_blank"
                rel="noreferrer"
              >
                SFU Campus Timeline
              </a>
              <p className="text-right">Spring 2023</p>
            </h3>

            <ul>
              <li>
                👉{" "}
                <strong>
                  <i>Designed and developed a landing page</i>
                </strong>{" "}
                showcasing background information about the SFU campuses using
                Next.js and Tailwind CSS.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Built a structured directory of HTML pages</i>
                </strong>{" "}
                to organize buildings by campuses and opening dates, leveraging
                the Bootstrap CSS framework.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Integrated interactive maps</i>
                </strong>{" "}
                to display approximate building locations using the Leaflet Maps
                Library.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Created dynamic slideshows</i>
                </strong>{" "}
                to showcase campus building images utilizing Bootstrap
                components.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Implemented a sticky navigation bar</i>
                </strong>{" "}
                to enhance usability and streamline site navigation.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Contributions</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/CSSS/csss-site-frontend"
                target="_blank"
                rel="noreferrer"
              >
                csss-site-frontend
              </a>
              <p className="text-right">August 2024</p>
            </h3>

            <ul>
              <li>
                👉 Developed a dedicated page for the CSSS common rooms to
                showcase images and relevant information using React.js.
              </li>
              <li>
                👉 Created an interactive page to display detailed information
                about all CSSS committees using React.js.
              </li>
              <li>
                👉 Seamlessly integrated the new pages into the existing website
                directory to ensure smooth navigation and consistent
                functionality.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>
        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/CSSS/csss-site-backend"
                target="_blank"
                rel="noreferrer"
              >
                csss-site-backend
              </a>
              <p className="text-right">August 2024</p>
            </h3>

            <ul>
              <li>
                👉 Integrated new database tables into existing database for
                storing Blog entries and associated poster information using
                SQLAlchemy.
              </li>

              <li id="work-experience">
                👉 Executed database migrations to seamlessly incorporate the
                new tables into the existing schema with Alembic scripts.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Work Experience</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>Concession Attendant (May 2023 - Present)</h3>
            <h3>Playland at PNE, Vancouver, British Columbia</h3>

            <ul>
              <li>
                👉{" "}
                <strong>
                  <i>Managed POS systems</i>
                </strong>{" "}
                with precision to ensure accurate and efficient customer
                transactions.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Coordinated with kitchen staff</i>
                </strong>{" "}
                to relay customer orders, ensuring prompt preparation and
                delivery.
              </li>
              <li>
                👉{" "}
                <strong>
                  <i>Balanced front-end and back-end responsibilities</i>
                </strong>
                , effectively multitasking to provide exceptional service and
                fulfill orders.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Education</pdf_header>
        <pdf_div>
          <pdf_text>
            <h3>Simon Fraser University (September 2021 - Present)</h3>
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
