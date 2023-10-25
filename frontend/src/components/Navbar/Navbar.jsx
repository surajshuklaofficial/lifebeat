import { NavLink, useNavigate } from "react-router-dom";
import { HAMBURGERMENU, LOGO } from "../../assets";

const Navbar = ({setSideMenu, sideMenu}) => {
  const navigate = useNavigate();

  const addingSymbols = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0.625rem 0.75rem",
    backgroundSize: "1rem",
  };

  return (
    <nav className="flex flex-row flex-grow w-full md:gap-2 lg:gap-6 justify-between py-2 lg:mt-3 px-2 lg:px-4 bg-green-200 lg:bg-transparent relative z-0 items-center">
      <input
        className="py-1 pl-12 bg-green-50 rounded-md text-green-800 hidden lg:block w-3/4"
        placeholder="Search"
        type="Search"
        style={addingSymbols}
      />
      <div className="lg:hidden" onClick={() => navigate('/about-us')}>
        <img className="w-10 h-10  ml-2 mr-6 my-2" src={LOGO} alt='logo' />
      </div>
      <ul className="flex flex-row gap-16 py-1 whitespace-nowrap">
        <li>
          <NavLink
            to="/home/dashboard"
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
        {/* <li>
          <NavLink
            to="/emergency-services"
            className={({ isActive, isPending }) =>
              isActive ? "active-nav-link" : isPending ? "text-gray-400 pending" : ""
            }
          >
            Emergency Services
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/help"
            className={({ isActive, isPending }) =>
              isActive ? "active-nav-link" : isPending ? "text-gray-400 pending" : ""
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <button 
        className={`rounded border p-1 m-2 bg-green-500 lg:hidden absolute right-1 -bottom-12 ${sideMenu ? 'hidden' : ''}`}
        onClick={() => setSideMenu(true)}
        >
        <img className="w-6 h-6" src={HAMBURGERMENU} alt="hamburger-menu" />
      </button>
    </nav>
  );
};

export default Navbar;
