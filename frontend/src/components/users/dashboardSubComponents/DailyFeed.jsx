import React, { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import DailyFeedForm from "./DailyFeedForm";

const DailyFeeds = ({}) => {
  const [enterFeed, setEnterFeed] = useState(false);
  const { todayActivity } = useLoaderData();


  const handleEnterFeed = () => {
    setEnterFeed((prevState) => !prevState);
  };

  return (
    <div
      className="border border-secondary-light text-primary-dark p-4 rounded-lg shadow-md max-h-fit dark:border-secondary-dark dark:text-white w-full relative"
      style={{ height: "300px" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Daily Feeds</h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="text-lg">Calories Burned:</span>
          <span className="text-primary-dark font-semibold dark:text-white">
            {todayActivity?.caloriesBurned?.value}{" "}
            {todayActivity?.caloriesBurned?.unit}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg">Distance Walked:</span>
          <span className="text-primary-dark font-semibold dark:text-white">
            {todayActivity?.distanceWalked?.value}{" "}
            {todayActivity?.distanceWalked?.unit}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg">Running:</span>
          <span className="text-primary-dark font-semibold dark:text-white">
            {todayActivity?.running?.value} {todayActivity?.running?.unit}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg">Steps Taken:</span>
          <span className="text-primary-dark font-semibold dark:text-white">
            {todayActivity?.stepsTaken?.value} {todayActivity?.stepsTaken?.unit}
          </span>
        </li>
      </ul>
      <button
        className="absolute bottom-4 right-4 dark:bg-ascent-dark dark:text-white p-2 rounded-md"
        onClick={handleEnterFeed}
      >
        Enter Today Feed
      </button>
      {enterFeed && <DailyFeedForm handleEnterFeed={handleEnterFeed} todayActivity={todayActivity}/>}
    </div>
  );
};

export default DailyFeeds;
