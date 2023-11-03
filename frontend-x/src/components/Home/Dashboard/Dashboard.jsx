import { Metrics, ActivityGraph, DailyGoals, ScoreCard } from '../../';

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