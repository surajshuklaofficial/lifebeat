import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLoaderData  } from 'react-router-dom';

import { Navbar } from './components';
import { SidebarStateContext } from './contexts'

export const loader = async () => {
  const userid = localStorage.getItem('userid');
  return { userid };
}

const App = () => {
  const { userid } = useLoaderData();
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSideMenu(false);
    }
  }, [innerWidth])

  useEffect(() => {
    console.log(userid);
    if (userid === undefined || userid === null) navigate('/auth');
    else navigate('/home');
  }, []);

  return (
    <SidebarStateContext.Provider value={{sideMenu, setSideMenu}}>
      <Navbar />
      <Outlet />
    </SidebarStateContext.Provider>
  )
}

export default App;