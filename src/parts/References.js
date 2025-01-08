import React from 'react';
import Daa1 from '../assets/images/daa..jpg';
import Daa2 from '../assets/images/daa.jpg';

const References = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mb-5 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">References</h2>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
          <img
            src={Daa1} // Replace with your image URL
            alt="Introduction to Design and Analysis of Algorithms"
            className="w-32 h-48 object-cover rounded-lg shadow-md"
          />
          <div className="sm:w-3/4">
            <h3 className="text-xl font-semibold text-gray-900">Introduction to Design and Analysis of Algorithms (Second Edition)</h3>
            <p className="text-gray-600">By Anany Levitin</p>
            <p className="text-gray-500 mt-2">Publisher: <span className="font-semibold">Pearson</span></p>
            <p className="text-gray-500">Year: <span className="font-semibold">2012</span></p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
          <img
            src={Daa2} // Replace with your image URL
            alt="An Introduction to Data Structures and Algorithms"
            className="w-32 h-48 object-cover rounded-lg shadow-md"
          />
          <div className="sm:w-3/4">
            <h3 className="text-xl font-semibold text-gray-900">An Introduction to Data Structures and Algorithms</h3>
            <p className="text-gray-600">By James A. Storer</p>
            <p className="text-gray-500 mt-2">Publisher: <span className="font-semibold">Prentice Hall</span></p>
            <p className="text-gray-500">Year: <span className="font-semibold">2001</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
