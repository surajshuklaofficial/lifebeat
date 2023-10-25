import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { Navbar } from './components';

export const loader = async () => {
  const userid = localStorage.getItem('userid');
  return { userid };
}

const App = () => {
  const { userid } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userid)
    if (userid === null) navigate('/auth');
    else navigate('/home/dashboard');
  }, []);


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;