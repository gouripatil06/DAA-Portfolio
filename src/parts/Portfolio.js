/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable eol-last */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
import Transport from '../assets/images/rb_1780.png';

const ProjectPreview = () => {
  return (
    <section className="container mx-auto mt-20 px-4">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-6">
          Public Transport Route Optimization
        </h1>
      </Fade>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Fade direction="left" triggerOnce>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative group">
              <img 
                src={Transport} 
                alt="Transport Route Optimization" 
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-theme-blue bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <p className="text-xl font-semibold">Complex Network Analysis</p>
                  <p className="text-sm mt-2">Using advanced algorithms for optimal routing</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl text-theme-blue font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600">
                An innovative solution for optimizing public transport systems using advanced algorithms 
                and data structures. Our approach focuses on improving efficiency, reducing travel times, 
                and enhancing the overall passenger experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="text-lg text-theme-blue font-semibold mb-2">Key Features</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Route Optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time Updates
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="text-lg text-theme-blue font-semibold mb-2">Technologies</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Graph Algorithms
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Data Structures
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button 
                onClick={() => {
                  window.location.href = '/project';
                }}
                className="bg-theme-blue text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
              >
                <span>View Full Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ProjectPreview;