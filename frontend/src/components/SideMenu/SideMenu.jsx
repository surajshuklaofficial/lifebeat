import React, { useContext } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { LOGO, PROFILE } from '../../assets';
import SidebarStateContext from '../../contexts/SidebarStateContext';

const SideMenu = () => {
  const navigate = useNavigate();
  const { setSideMenu } = useContext(SidebarStateContext)

  const { userid, username } = useLoaderData();

  return (
    <aside className="px-4 py-16 w-60 bg-white md:m-4 rounded-lg shadow-md absolute top-2 right-0 z-10 lg:relative">
      <button 
        className='absolute right-4 top-4 lg:hidden'
        onClick={() => setSideMenu(prevState => !prevState)}
      >
        X
      </button>
      <figure className="flex-center flex-col">
        {innerWidth > 1024 ? 
          <img className="w-20 h-20 hidden" src={LOGO} alt="logo" onClick={() => navigate('/about-us')}/> : 
          <>
            <img className="rounded-full w-20 h-20 mb-2" src={PROFILE} alt="profile-photo" onClick={() => navigate(`/profile/${userid}/${username}`)}/>
            <h3 className="text-lg font-semibold text-green-800">{username}</h3>
          </>
        }

      </figure>
      <nav className="pt-16">
        <ul className="flex-center flex-col gap-10 font-medium text-center">
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="medical-record"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Medical Record
            </NavLink>
          </li>
          <li>
            <NavLink
              to="nutrition"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink
              to="workout"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Workout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="appointments-and-medications"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Appointments<br />&<br />Medications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chat"
              className={({ isActive, isPending }) =>
                isActive ? "active-sidemenu-link" : isPending ? "pending" : ""
              }
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
