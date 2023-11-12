import React, { useState } from "react";
import { Form } from 'react-router-dom';

const DailyFeedForm = ({handleEnterFeed, todayActivity}) => {
  const [activity, setActivity] = useState(todayActivity || {caloriesBurned: {value: 0, unit: 'kcal'}, distanceWalked: {value: 0, unit: 
  'km'}, running: {value: 0, unit: 'minutes'}, stepsTaken: {value: 0, unit: 'steps'}});
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-primary-dark rounded-lg p-4 w-full max-w-md z-50">
        <h2 className="text-2xl font-semibold mb-4">Enter Daily Feed</h2>
        <button className="absolute top-2 right-2 hover:bg-red-600" onClick={handleEnterFeed}>
          X
        </button>
        <Form method="post">
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 dark:text-gray-300">
              Calories Burned:
            </label>
            <input
              name="caloriesBurned"
              type="text"
              id="data"
              value={activity?.caloriesBurned?.value}
              onChange={(e) => setActivity({...activity, caloriesBurned: {value: e.target.value}})}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 dark:text-gray-300">
              Steps Taken:
            </label>
            <input
              name="stepsTaken"
              type="text"
              id="data"
              value={activity?.stepsTaken?.value}
              onChange={(e) => setActivity({...activity, stepsTaken: {value: e.target.value}})}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 dark:text-gray-300">
              Running:
            </label>
            <input
              name="running"
              type="text"
              id="data"
              value={activity?.running?.value}
              onChange={(e) => setActivity({...activity, running: {value: e.target.value}})}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 dark:text-gray-300">
              Distance Walked:
            </label>
            <input
              name="distanceWalked"
              type="text"
              id="data"
              value={activity?.distanceWalked?.value}
              onChange={(e) => setActivity({...activity, distanceWalked: {value: e.target.value}})}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 border rounded p-2 dark:border-gray-300"
              onClick={handleEnterFeed}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-0"
      />
    </div>
  );
};

export default DailyFeedForm;
