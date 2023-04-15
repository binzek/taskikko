import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="mt-auto flex items-center justify-center gap-7 py-3 text-sm font-thin text-gunmetal duration-200 dark:text-azure">
      <span>&copy;{year}</span>
      <span>
        Created by{" "}
        <a
          href="https://wajid.me/"
          target="_blank"
          className="text-raspberry"
          aria-label="Go to developer's personal website"
        >
          Wajid
        </a>
      </span>
      <a
        href="https://github.com/wajid-nv/taskikko/"
        target="_blank"
        aria-label="Go to the Github repository of this app"
      >
        <AiFillGithub className="text-base text-raspberry" />
      </a>
    </footer>
  );
};

export default Footer;
