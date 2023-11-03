import React from 'react';

const TodayScore = () => {
  // Sample user's score data (replace with actual data)
  const userScore = 1200; // You can replace this with the user's actual score for the day

  return (
    <div className="bg-secondary-light text-primary-dark dark:bg-secondary-dark dark:text-white p-4 rounded-lg shadow-md max-h-fit  w-full" style={{height: '150px'}}>
      <h2 className="text-2xl font-semibold mb-4">Today's Score</h2>
      <div className="text-5xl font-bold">{userScore}</div>
    </div>
  );
};

export default TodayScore;
