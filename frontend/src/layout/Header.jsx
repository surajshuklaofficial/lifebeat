import React, { useState, useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

import { HAMBURGERMENU, LOGO, CROSS, LIGHTBULB, PROFILE } from "../assets";
import themeContext from "../contexts/ThemeContext";

export const loader = () => {
  const username = localStorage.getItem('username');
  const userid = localStorage.getItem('userid');

  return { username, userid};
}

const Header = () => {
  const { username, userid } = useLoaderData();
  const [toggle, setToggle] = useState(false);

  const setTheme = useContext(themeContext);

  const toggleDarkMode = () => {
    setTheme((theme) => (theme === "dark" ? "" : "dark"));
  };

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header
      className={`p-4 shadow-md border-b border-gray-300 sticky top-0 dark:bg-primary-dark dark:text-white bg-primary-light text-primary-dark z-50`}
    >
      <div className=" flex justify-between items-center">
        <Link className="flex items-center space-x-4 cursor" to="/">
          <figure>
            <img
              src={LOGO}
              alt="Health Logo"
              width="40"
              height="40"
              className="h-10"
            />
          </figure>
          <h1 className="text-md sm:text-xl font-semibold ">Health Manager</h1>
        </Link>

        <nav className="">
          <ul className="hidden sm:flex gap-4 items-center">
            <li>
              <NavLink
                to="/home/dashboard"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-ascent-light dark:text-ascent-dark"
                    : isPending
                    ? "bg-red-600"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-ascent-light dark:text-ascent-dark"
                    : isPending
                    ? "bg-red-600"
                    : ""
                }
              >
                Community
              </NavLink>
            </li>
            <li className="rounded-full border block w-8 h-8 flex-center">
              <NavLink
                to={`/home/profile/${userid}/${username}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-ascent-light dark:text-ascent-dark"
                    : isPending
                    ? ""
                    : ""
                }
              >
              <img src={PROFILE} alt="logo" width={32} height={32} className="rounded-full"/>
              </NavLink>
            </li>
          </ul>
        </nav>

        <figure className='sm:hidden' onClick={handleMenu}>
          <img
            src={!toggle ? HAMBURGERMENU : CROSS}
            alt="hamburger-menu"
            width="16"
            height="16"
          />
        </figure>

        {toggle && (
          <nav className="absolute right-8 top-12 w-60 h-[80vh] bg-secondary-light dark:bg-secondary-dark p-4 rounded-lg border-2 dark:border-primary-dark border-primary-light sm:hidden">
            <ul className="flex flex-col gap-4 items-center">
              <li className="rounded-full border block w-28 h-28 flex-center mt-12 mb-8">
                <NavLink
                  to={`/home/profile/${userid}/${username}`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-ascent-light dark:text-ascent-dark"
                      : isPending
                      ? ""
                      : ""
                  }
                >
                  <img src={PROFILE} alt="logo" width={112} height={112} className="rounded-full"/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/dashboard"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-ascent-light dark:text-ascent-dark"
                      : isPending
                      ? ""
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-ascent-light dark:text-ascent-dark"
                      : isPending
                      ? ""
                      : ""
                  }
                >
                  Community
                </NavLink>
              </li>
            </ul>
            <div className="p-4 text-center">
              <button
                className={`bg-primary-dark text-primary-light p-1 rounded-full hover:bg-primary hover:text-white absolute bottom-4 left-1/2 transform -translate-x-1/2`}
                onClick={toggleDarkMode}
              >
                <img
                  src={LIGHTBULB}
                  alt="toggle-dark-mode"
                  width="24 "
                  height="24"
                />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
