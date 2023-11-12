import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WeeklyLeaderboard = () => {
  const {leaderboardData } = useLoaderData();
  console.log(leaderboardData)
  return (
    <div className="bg-secondary-light text-primary-dark p-4 rounded-lg shadow-md dark:bg-secondary-dark dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Weekly Leaderboard</h2>
      <ul className="space-y-2">
        {leaderboardData.map((user, index) => (
          <li key={user._id} className="flex justify-between">
            <span className="text-lg">
              {user?.firstName}
            </span>
            <span className="text-primary-dark font-semibold">{user?.totalScore}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyLeaderboard;
