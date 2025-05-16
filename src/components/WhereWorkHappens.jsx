import React from 'react';
import { Link } from 'react-router-dom';

const WhereWorkHappens = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
        <img
          src="./this.png"
          alt="Team collaboration"
          className="max-w-full h-auto object-contain scale-95 hover:scale-100 transition duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Where Work Happens</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          When your team needs to kick off a project, hire a new employee, deploy some code,
          review a sales contract, finalize next year's budget, measure an A/B test, or plan your
          next office opening — Slack has you covered.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/homepage"
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-400">
            Want to signin instead{' '}
            <Link to="/signup" className="underline text-gray-200 hover:text-white">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereWorkHappens;
