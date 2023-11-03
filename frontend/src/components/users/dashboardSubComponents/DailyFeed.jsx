import React from 'react';

const DailyFeeds = () => {
  // Sample daily activity data (replace with actual data)
  const dailyActivities = [
    { label: 'Calories Burned', value: '450 kcal' },
    { label: 'Steps Taken', value: '8,500 steps' },
    { label: 'Distance Walked', value: '5.2 km' },
    { label: 'Running', value: '30 minutes' },
  ];

  return (
    <div className="border border-secondary-light text-primary-dark p-4 rounded-lg shadow-md max-h-fit dark:border-secondary-dark dark:text-white w-full" style={{height: '300px'}}>
      <h2 className="text-2xl font-semibold mb-4">Daily Feeds</h2>
      <ul className="space-y-2">
        {dailyActivities.map((activity, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-lg">{activity.label}:</span>
            <span className="text-primary-dark font-semibold dark:text-white">{activity.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyFeeds;
