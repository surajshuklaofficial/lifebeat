import React, { useState } from 'react';
import DailyFeedForm from "./DailyFeedForm";

const DailyFeeds = () => {
  const [enterFeed, setEnterFeed] = useState(false);
  // Sample daily activity data (replace with actual data)
  const dailyActivities = [
    { label: 'Calories Burned', value: '450 kcal' },
    { label: 'Steps Taken', value: '8,500 steps' },
    { label: 'Distance Walked', value: '5.2 km' },
    { label: 'Running', value: '30 minutes' },
  ];

  const handleEnterFeed = () => {
    setEnterFeed(prevState => !prevState);
    console.log('clicked')
  }

  return (
    <div className="border border-secondary-light text-primary-dark p-4 rounded-lg shadow-md max-h-fit dark:border-secondary-dark dark:text-white w-full relative" style={{height: '300px'}}>
      <h2 className="text-2xl font-semibold mb-4">Daily Feeds</h2>
      <ul className="space-y-2">
        {dailyActivities.map((activity, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-lg">{activity.label}:</span>
            <span className="text-primary-dark font-semibold dark:text-white">{activity.value}</span>
          </li>
        ))}
      </ul>
      <button className='absolute bottom-4 right-4 dark:bg-ascent-dark dark:text-white p-2 rounded-md' onClick={handleEnterFeed}>
          Enter Today Feed
      </button>
      { enterFeed && <DailyFeedForm handleEnterFeed={handleEnterFeed}/> }
    </div>
  );
};

export default DailyFeeds;
