import React, { useState } from "react";

const DailyFeedForm = ({handleEnterFeed }) => {
  const [data, setData] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-primary-dark rounded-lg p-4 w-full max-w-md z-50">
        <h2 className="text-2xl font-semibold mb-4">Enter Daily Feed</h2>
        <button className="absolute top-2 right-2 hover:bg-red-600" onClick={handleEnterFeed}>
          X
        </button>
        <form >
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 dark:text-gray-300">
              Data:
            </label>
            <input
              type="text"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 border rounded p-2 dark:border-gray-300"
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
        </form>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-0"
      />
    </div>
  );
};

export default DailyFeedForm;
