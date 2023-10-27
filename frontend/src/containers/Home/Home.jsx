import { useContext, useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { Profile, SideMenu } from '../../components';
import { SidebarStateContext } from '../../contexts';
import { fetchMedicalRecord } from '../../api';

export const loader = async ({ params }) => {
  const username = localStorage.getItem('username');
  const id = localStorage.getItem('userid');
  const { data } = await fetchMedicalRecord(id);
  return { medicalRecordData: data, username, userid: id };
};

const Home = () => {
  const { userid }= useLoaderData();
  const { sideMenu } = useContext(SidebarStateContext);

  useEffect(() => {
    if (userid === null) navigate('/auth');
  }, []);

  return (
    <section className='flex flex-row w-full justify-between h-screen bg-green-100'>

      { sideMenu && <SideMenu /> }

      <div className='w-full' >
        <Outlet />
      </div>

      <Profile />
    </section>
  )
}

export default Home;