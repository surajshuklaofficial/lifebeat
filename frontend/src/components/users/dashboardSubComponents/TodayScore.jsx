import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TodayScore = () => {
  const {score:userScore} = useLoaderData(); 

  return (
    <div className="bg-secondary-light text-primary-dark dark:bg-secondary-dark dark:text-white p-4 rounded-lg shadow-md max-h-fit  w-full" style={{height: '150px'}}>
      <h2 className="text-2xl font-semibold mb-4">Today's Score</h2>
      <div className="text-5xl font-bold">{userScore}</div>
    </div>
  );
};

export default TodayScore;
