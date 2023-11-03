import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLoaderData  } from 'react-router-dom';

import { Navbar } from './components';
import { SidebarStateContext } from './contexts'

import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const loader = async () => {
  const userid = localStorage.getItem('userid');
  return { userid };
}

const App = () => {
  const { userid } = useLoaderData();
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(true);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSideMenu(false);
    }
  }, [innerWidth])

  // useEffect(() => {
  //   console.log(userid);
  //   if (userid === undefined || userid === null) navigate('/auth');
  //   else navigate('/home');
  // }, []);

  return (
    <SidebarStateContext.Provider value={{sideMenu, setSideMenu}}>
      <Navbar />
      <Outlet />
      <Pie data={data} />

    </SidebarStateContext.Provider>
  )
}

export default App;