/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable eol-last */

import React from 'react';
import { motion } from 'framer-motion';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

const ProjectDetailPage = () => {
  const projectDetails = {
    title: "Public Transport Route Optimization",
    subtitle: "Advanced Algorithm Implementation & System Design",
    overview: "An innovative solution leveraging data structures and algorithms to optimize public transportation routes, enhancing efficiency and improving user experience through intelligent route planning and real-time optimization.",
    phases: [
      {
        title: "Project Initiation & Planning",
        description: "Comprehensive project setup including feasibility studies, stakeholder identification, and detailed project planning using WBS and Gantt charts.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: "Algorithm Development",
        description: "Implementation of advanced algorithms including Dijkstra's, A*, and custom optimization algorithms for route planning and scheduling.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      },
      {
        title: "Data Management & Analysis",
        description: "Robust data collection and analysis system with real-time processing capabilities for route optimization and demand prediction.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      }
    ],
    technologies: [
      "Graph Algorithms",
      "React.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Data Structures",
      "Real-time Processing"
    ],
    features: [
      {
        title: "Route Optimization",
        description: "Intelligent path finding using advanced algorithms"
      },
      {
        title: "Real-time Updates",
        description: "Live tracking and route adjustments based on current conditions"
      },
      {
        title: "Demand Prediction",
        description: "AI-powered passenger demand forecasting"
      },
      {
        title: "Schedule Optimization",
        description: "Dynamic scheduling based on historical and real-time data"
      }
    ]
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-4">
          {projectDetails.title}
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {projectDetails.subtitle}
        </p>
      </motion.div>

      {/* Overview Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            {projectDetails.overview}
          </p>
        </div>
      </motion.div>

      {/* Phases Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Development Phases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectDetails.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {phase.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projectDetails.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-white rounded-full shadow-md text-blue-600 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectDetails.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProjectDetailPage;