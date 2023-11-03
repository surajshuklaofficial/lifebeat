import React from 'react';

const Activities = () => {
  // Sample activities data (replace with actual data)
  const activitiesData = [
    { title: 'Morning Walk', status: 'Completed', points: 100 },
    { title: 'Yoga Session', status: 'In Progress', points: 50 },
    { title: 'Healthy Lunch', status: 'Not Started', points: 80 },
  ];

  return (
    <div className="bg-secondary-light text-primary-dark p-4 rounded-lg shadow-md dark:bg-secondary-dark dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Activities</h2>
      <ul className="space-y-4">
        {activitiesData.map((activity, index) => (
          <li key={index} className="flex items-center justify-between">
            <div>
              <h3 className="text-lg">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.status}</p>
            </div>
            <span className="text-primary-dark font-semibold">{activity.points} Points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
