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
        <a href="https://wajid.me/" target="_blank" className="text-raspberry">
          Wajid
        </a>
      </span>
      <a href="https://github.com/wajid-nv/taskikko/" target="_blank">
        <AiFillGithub className="text-base text-raspberry" />
      </a>
    </footer>
  );
};

export default Footer;
