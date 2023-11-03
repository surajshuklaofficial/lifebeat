import React from 'react';

const WeeklyLeaderboard = () => {
  // Sample leaderboard data (replace with actual data)
  const leaderboardData = [
    { rank: 1, username: 'User1', score: 1600 },
    { rank: 2, username: 'User2', score: 1500 },
    { rank: 3, username: 'User3', score: 1400 },
    { rank: 4, username: 'User4', score: 1300 },
    { rank: 5, username: 'User5', score: 1200 },
  ];

  return (
    <div className="bg-secondary-light text-primary-dark p-4 rounded-lg shadow-md dark:bg-secondary-dark dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Weekly Leaderboard</h2>
      <ul className="space-y-2">
        {leaderboardData.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-lg">
              {entry.rank}. {entry.username}
            </span>
            <span className="text-primary-dark font-semibold">{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyLeaderboard;
