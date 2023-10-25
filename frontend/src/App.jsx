import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { Navbar } from './components';

export const loader = async () => {
  const user = localStorage.getItem('user');
  return { user };
}

const App = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user === null) navigate('/auth');
  //   else navigate('/home/dashboard');
  // }, []);


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;