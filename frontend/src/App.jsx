import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useRouteLoaderData  } from 'react-router-dom';

import { Navbar } from './components';
import { SidebarStateContext } from './contexts'

export const loader = async () => {
  const userid = localStorage.getItem('userid');
  return { userid };
}

const App = () => {
  const userid = useRouteLoaderData();
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSideMenu(false);
    }
  }, [innerWidth])

  useEffect(() => {
    if (userid === null) navigate('/auth');
    // else navigate('/home');
  }, []);

  return (
    <SidebarStateContext.Provider value={{sideMenu, setSideMenu}}>
      <Navbar />
      <Outlet />
    </SidebarStateContext.Provider>
  )
}

export default App;