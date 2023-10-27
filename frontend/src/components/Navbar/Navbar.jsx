import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HAMBURGERMENU, LOGO } from "../../assets";
import { SidebarStateContext } from "../../contexts";

const Navbar = () => {
  const navigate = useNavigate();
  const { setSideMenu } = useContext(SidebarStateContext);

  const addingSymbols = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0.625rem 0.75rem",
    backgroundSize: "1rem",
  };

  return (
    <header className="flex flex-row flex-grow w-full md:gap-1 lg:gap-6 py-2 px-1 lg:px-4 bg-green-200  z-10 lg:z-20 items-center top-0 sticky">
      <div className="flex w-full items-center">
        <div className="" onClick={() => navigate('/about-us')}>
          <img className="w-12 h-12 mx-4 lg:mx-6" src={LOGO} alt="logo" />
        </div>
        <input
          className="pl-12 bg-green-50 rounded-md text-green-800 hidden lg:block h-10 w-1/4"
          placeholder="Search"
          type="Search"
          style={addingSymbols}
        />
      </div>
      <nav>
        <ul className="flex flex-row gap-4 md:gap-8 lg:gap-10 py-1 whitespace-nowrap">
          <li>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isActive ? "active-nav-link" : isPending ? "text-gray-400 pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive, isPending }) =>
                isActive ? "active-nav-link" : isPending ? "text-gray-400 pending" : ""
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive, isPending }) =>
                isActive ? "active-nav-link" : isPending ? "text-gray-400 pending" : ""
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="rounded border p-2 m-2 bg-green-500 lg:hidden w-fit"
        onClick={() => setSideMenu((prev) => !prev)}
      >
        <img className="w-6 h-6" src={HAMBURGERMENU} alt="hamburger-menu" />
      </button>
    </header>
  );
};

export default Navbar;
