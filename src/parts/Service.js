/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FaEye } from 'react-icons/fa';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeSnippets } from './data';

const AboutCourse = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const algorithms = {
    graph: [
      'Depth First Search (DFS)',
      'Breadth First Search (BFS)',
      "Dijkstra's Algorithm",
      'Bellman-Ford Algorithm',
      'Floyd-Warshall Algorithm',
    ],
    sorting: [
      'Bubble Sort',
      'Quick Sort',
      'Merge Sort',
      'Heap Sort',
      'Insertion Sort',
      'Selection Sort',
    ],
    string: [
      'KMP Algorithm',
      'Naive String Matching',
      'Rabin-Karp Algorithm',
      'Boyer-Moore Algorithm',
    ],
    trees: [
      'Binary Tree',
      'Binary Search Tree (BST)',
      'AVL Tree',
      'Red-Black Tree',
      'B-Tree',
      'Trie',
      'Suffix Tree',
      'Segment Tree',
      'Fenwick Tree',
      'Skip List',
    ],
  };

  const openModal = (codeName) => {
    setCurrentCode(codeSnippets[codeName]);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const AlgorithmSection = ({ title, items }) => (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all duration-300"
            onClick={() => openModal(item)}
          >
            <FaEye className="inline-block mr-2" /> {item}
          </div>
        ))}
      </div>
    </div>
  );

  const Card = ({ title, content }) => (
    <div className="p-6 rounded-lg bg-white shadow-md border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About The Course
        </motion.h2>

        <Card 
          title="What is the course about?"
          content="This course focuses on designing efficient algorithms and analyzing their performance. You'll learn time and space complexity evaluation, algorithm correctness analysis, graph traversal techniques, sorting, searching, and advanced data structures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AlgorithmSection title="Graph Algorithms" items={algorithms.graph} />
          <AlgorithmSection title="Sorting Algorithms" items={algorithms.sorting} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AlgorithmSection title="String Matching Algorithms" items={algorithms.string} />
          <AlgorithmSection title="Tree Data Structures" items={algorithms.trees} />
        </div>

        <Card 
          title="Course Curriculum Overview"
          content="This course covers a comprehensive range of topics, including sorting algorithms (Merge Sort, Quick Sort), searching algorithms (Binary Search, Linear Search), divide and conquer techniques, dynamic programming, greedy algorithms, graph algorithms, and complexity analysis."
        />
      </div>

      {/* Modal for displaying code */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-xl text-gray-600" onClick={closeModal}>
              &times;
            </button>
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {currentCode}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutCourse;

