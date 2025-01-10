import React from "react";
import { darkmode } from "@/components/theme/light_dark";
import { links } from "@/components/nav/navbar";

// eslint-disable-next-line react/prop-types
export default function Dropdown({ isOpen }) {
  return (
    <div
      className={` dropdown ${isOpen ? "block" : "hidden"} 
        sm:`}
    >
      <div>
        {links.map(({ name, href, key }) => (
          <a
            key={key}
            className="dropdown_list"
            href={href}
            target={key === "other_work" ? "_blank" : "_self"}
            onClick={key === "dark-mode" ? darkmode : null}
            rel="noreferrer"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
