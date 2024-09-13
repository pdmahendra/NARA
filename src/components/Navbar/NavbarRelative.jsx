import React, { useState, useEffect } from "react";
import SliderNavbar from "./SliderNavbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarRelative = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div>
      {/* Top Navbar */}
      <div className="relative top-0 left-0 w-full z-50 flex justify-between items-center bg-white dark:!bg-black md:px-10 pl-4 pr-2 py-4 bg-opacity-80">
        <div className="flex items-center">
          <button
            className="text-4xl font-bold text-black dark:!text-white"
            onClick={toggleMenu}>
            &#9776;
          </button>
          <img src="/about/logo.svg" className=" md:ml-10 ml-4" alt="logo" />
        </div>
        <div className="flex items-center space-x-1 md:space-x-7">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 leading-9 text-4xl rounded-full m-1 text-[#1F4A40] dark:!text-white">
            {theme == "light" ? (
              <img src="/home/navbar/light_icon1.svg" alt="light mode icon" />
            ) : (
              <img
                src="/home/navbar/icon4.svg"
                className="white-icon"
                alt="/light mode icon"
              />
            )}
          </button>
          {theme == "light" ? (
            <>
              <img src="/home/navbar/icon1.svg" alt="light mode icon" />
              <img src="/home/navbar/user.svg" alt="light mode icon" />
              <img
                src="/home/navbar/shoppingCart.svg"
                className="md:flex hidden"
                alt="light mode icon"
              />
            </>
          ) : (
            <>
              <img
                src="/home/navbar/icon1.svg"
                className="white-icon"
                alt="light mode icon"
              />
              <img
                src="/home/navbar/user.svg"
                className="white-icon"
                alt="light mode icon"
              />
              <img
                src="/home/navbar/shoppingCart.svg"
                className="white-icon md:flex hidden"
                alt="light mode icon"
              />
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <SliderNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavbarRelative;