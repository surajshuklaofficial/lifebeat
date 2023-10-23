
import { Navbar, Profile, SideMenu, Metrics, ActivityGraph, DailyGoals, ScoreCard } from '../../components';
 
const Home = () => {
  return (
    <section className='flex flex-row w-full justify-between'>

      <SideMenu />
      <div className='p-4 w-full mx-24'>
        <Navbar />
        <Metrics />
        <DailyGoals />

        <div>
          <ActivityGraph />
          <ScoreCard />
        </div>
      </div>
      <Profile />
    </section>
  )
}

export default Home;