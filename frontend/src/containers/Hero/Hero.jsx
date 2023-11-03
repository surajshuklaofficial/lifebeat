import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-between bg-hero bg-center bg-cover ">
      <div className="max-w-3xl mx-auto p-6 text-center opacity-100">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-2xl">
          Welcome to Health Manager
        </h1>
        <p className="mt-4 text-lg text-gray-200 dark:text-gray-400">
          Your all-in-one solution for managing your health and wellness.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="/auth"
            className="bg-ascent-dark text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600"
          >
            Register
          </a>
          <a
            href="/auth"
            className="border border-ascent-dark text-ascent-dark py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
