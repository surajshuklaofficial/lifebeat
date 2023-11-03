import DailyFeeds from "./dashboardSubComponents/DailyFeed";
import TodayScore from "./dashboardSubComponents/TodayScore";
import WeeklyLeaderboard from "./dashboardSubComponents/WeeklyLeaderboard";
import Activities from "./dashboardSubComponents/Activities";

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