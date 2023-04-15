import React from "react";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  const html = document.getElementsByTagName("html")[0];
  localStorage.theme;
  html.classList = localStorage.theme;

  return (
    <div className="flex items-center px-3 py-2 lg:px-5 lg:py-4">
      <a
        href="/"
        className="ml-auto select-none text-center text-3xl font-bold text-keppel duration-200 md:text-4xl"
      >
        Taskikko
      </a>
      <CgDarkMode
        className="ml-auto cursor-pointer text-3xl text-gunmetal duration-200 dark:text-azure"
        onClick={() => {
          if (localStorage.theme === "") {
            localStorage.theme = "dark";
          } else {
            localStorage.theme = "";
          }
          html.classList = localStorage.theme;
        }}
      ></CgDarkMode>
    </div>
  );
};

export default Header;
