import { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar, Profile, SideMenu } from '../../components';
 
export const loader = () => {
  const username = localStorage.getItem('username');
  console.log(username);
  return { username };
}

const Home = () => {
  const {username }= useLoaderData();
  const [sideMenu, setSideMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSideMenu(false);
    }
  }, [innerWidth])

  return (
    <section className='flex flex-row w-full justify-between h-screen bg-green-100'>

      { sideMenu && <SideMenu setSideMenu={setSideMenu} username={username}/> }

      <div className='w-full' >
        {/* <Navbar setSideMenu={setSideMenu} sideMenu={sideMenu}/> */}
        <Outlet />
      </div>

      <Profile username = {username} />
    </section>
  )
}

export default Home;