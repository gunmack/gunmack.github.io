import React from "react";
import "@/app/globals.css";

function Resume_PDF() {
  return (
    <div>
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
        <div>
          <pdf_text>
            <p>
              <strong>Languages:</strong> Python, C, HTML, CSS, Java,
              JavaScript, SQL
            </p>
            <p>
              <strong>Frameworks:</strong> React, Tailwind, Flask, Bootstrap
            </p>
            <p>
              <strong>Tools:</strong> Git, Linux, Microsoft Office
            </p>
          </pdf_text>
        </div>

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
                Calculator Web Application
              </a>
              <p className="text-right"> August 2024</p>
            </h3>

            <ul>
              <li>
                👉 Built a fully functional calculator web application using the
                Flask framework.
              </li>
              <li>
                👉 Developed a dynamic user interface with HTML embedded within
                Flask components for seamless interaction.
              </li>
              <li>
                👉 Used regex functions to tokenize user input for efficient
                parsing and processing of mathematical expressions.
              </li>
              <li>
                👉 Implemented calculator functionalities like clearing inputs
                and deleting recent characters.
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
                👉 Designed a landing page with Next.js and Tailwind to present
                background information about the SFU campuses.
              </li>
              <li>
                👉 Developed a comprehensive directory of HTML pages using
                Bootstrap CSS framework to categorize buildings with their
                respective campuses and opening dates.
              </li>
              <li>
                👉 Integrated the Leaflet interactive map library to display
                approximate building locations on a pop-up map.
              </li>
              <li>
                👉 Used Bootstrap elements to create interactive slideshows that
                let users view images of the buildings.
              </li>
              <li>
                👉 Implemented a sticky navigation bar to let users navigate the
                website.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_div>
          <pdf_text>
            <h3>
              <a
                className="link hover:text-blue-400"
                href="https://github.com/gunmack/Python-Image-Processor"
                target="_blank"
                rel="noreferrer"
              >
                Python Image Processor
              </a>
              <p className="text-right">November 2021</p>
            </h3>

            <ul>
              <li>
                👉 Utilized Numpy and Pygame libraries to develop a
                user-friendly interface that allows users to perform advanced
                image processing.
              </li>
              <li>
                👉 Created and integrated image filters like sepia, warm, cold,
                etc. that use pixel manipulation to let users process images as
                required.
              </li>
              <li>
                👉 Used pixel manipulation to Implement image resizing
                capabilities for user uploaded images.
              </li>
              <li>
                👉 Enabled functionality to let users save processed images to
                local storage using Pygame’s built-in features.
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
                👉 Became proficient with the existing React frontend
                architecture, gaining a deep understanding of its file structure
                and components.
              </li>
              <li>
                👉 Developed a dedicated page for the CSSS common rooms,
                embedding images, SVG maps along with clear and organized tables
                for various refreshments available.
              </li>
              <li>
                👉 Integrated the page into the existing directory of pages to
                ensure seamless navigation and functionality of the broader
                website.
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
                👉 Familiarized with the existing backend API codebase, learning
                about its complex architecture and functionalities
              </li>
              <li>
                👉 Implemented a new database table using SQLAlchemy, ensuring a
                seamless integration of the table into the existing database
                schema.
              </li>
              <li>
                👉 Performed database migration with new revisions using Alembic
                as well as modifying Alembic scripts to reflect changes.
              </li>
            </ul>
          </pdf_text>
        </pdf_div>

        <pdf_header>Work Experience</pdf_header>
        <div>
          <pdf_text>
            <h3>Concession Attendant (May 2023 - Present)</h3>
            <h3>Playland at PNE, Vancouver, British Columbia</h3>

            <ul>
              <li>
                👉 Operated POS system with precision and accuracy while taking
                orders to facilitate seamless customer transaction experiences.
              </li>
              <li>
                👉 Maintained open lines of communication with kitchen staff to
                relay customer orders promptly and accurately, ensured timely
                preparation and delivery.
              </li>
              <li>
                👉 Utilized effective multitasking skills to seamlessly
                transition between front-end customer service and back-end
                kitchen operations as necessary to fulfill orders.
              </li>
            </ul>
          </pdf_text>
        </div>

        <pdf_header>Education</pdf_header>
        <div>
          <pdf_text>
            <h3>Simon Fraser University (September 2021 - Present)</h3>
            <ul>
              <li>👉 Bachelor of Science in Computing Science</li>
            </ul>
          </pdf_text>
        </div>
      </div>
    </div>
  );
}

export default Resume_PDF;
