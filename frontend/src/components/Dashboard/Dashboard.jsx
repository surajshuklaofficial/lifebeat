import { Navbar, Metrics, ActivityGraph, DailyGoals, ScoreCard } from '../../components';

const Dashboard = () => {
  return (
    <>
        <Metrics />
        <DailyGoals />

        <div className='flex w-full'>
            <ActivityGraph />
            <ScoreCard />
        </div>
    </>
  )
}

export default Dashboard;