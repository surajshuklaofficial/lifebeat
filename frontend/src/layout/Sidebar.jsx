import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { LIGHTBULB } from "../assets";
import themeContext from "../contexts/ThemeContext";

const Sidebar = () => {
  const setTheme = useContext(themeContext);

  const toggleDarkMode = () => {
    setTheme((theme) => (theme === "dark" ? "" : "dark"));
  };

  const navLinks = ['dashboard', 'medical-records', 'appointments', 'nutrition', 'workout', 'chat'];

  return (
    <nav
      className={`min-h-[85vh] flex flex-col justify-between rounded-lg dark:bg-secondary-dark dark:text-white bg-secondary-light text-primary-dark '}`}
      style={{ paddingTop: "4rem" }}
    >
      <ul className="p-2 flex-1 flex flex-col gap-4">
        {
          navLinks.map((navLink) => (
            <li key={navLink}>
              <NavLink
                to={navLink}
                className={({ isActive, isPending }) => `${isActive ? "active" : isPending ? "" : ""} sidebar-navlinks`}
              >
                {navLink[0].toUpperCase() + navLink.slice(1)}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="p-4">
        <button
          className={`bg-primary-dark text-primary-light p-1 rounded-full hover:bg-primary hover:text-white`}
          onClick={toggleDarkMode}
        >
          <img src={LIGHTBULB} alt="toggle-dark-mode" width="24 " height="24" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
