import { useLoaderData } from "react-router-dom";

import DailyFeeds from "./dashboardSubComponents/DailyFeed";
import TodayScore from "./dashboardSubComponents/TodayScore";
import WeeklyLeaderboard from "./dashboardSubComponents/WeeklyLeaderboard";
import Activities from "./dashboardSubComponents/Activities";
import { createOrUpdateTodayActivity, fetchTodayActivity, fetchTodayScore, fetchWeeklyLeaderboard } from '../../api/index.js';

export const loader = async () => {
  const userId = localStorage.getItem('userid');

  const {data: todayActivity} = await fetchTodayActivity(userId);
  const {data: scoreData} = await fetchTodayScore(userId);
  const {data: leaderboardData} = await fetchWeeklyLeaderboard(userId);

  const score = scoreData.score;

  return {todayActivity, score, leaderboardData};
}

export const action = async ({ request, params }) => {
  try {
    const userId = localStorage.getItem('userid');
    const formData = await request.formData();
    let todayActivityData = Object.fromEntries(formData);
    todayActivityData = {
      caloriesBurned: {value: todayActivityData?.caloriesBurned, unit: 'kcal'},
      distanceWalked: {value: todayActivityData?.distanceWalked, unit: 'km'},
      running: {value: todayActivityData?.running, unit: 'minutes'},
      stepsTaken: {value: todayActivityData?.stepsTaken, unit: 'steps'}
    }
    const response = await createOrUpdateTodayActivity(userId, todayActivityData);
    return { todayActivity: response.data };
  } catch {
    console.log('blo');
    return 0;
  }


};

const dashboard = () => {
    return (
    <section className="flex flex-col w-full gap-2 sm:gap-4">
      <DailyFeeds />
      <TodayScore />
      <WeeklyLeaderboard />
      <Activities />
    </section>
  )
}

export default dashboard;