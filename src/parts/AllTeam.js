/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Gouri Patil",
//       id: "01FE23BCS022",
//       role: "Project Lead & System Architect", 
//       description: "Leads the entire project development lifecycle and designs scalable system architecture for optimized public transport routing",
//       github: "https://github.com",
//       email: "mailto:gouri@example.com",
//       image: "https://i.ibb.co/BTnbnLV/gouri.jpg",
//       icons: [
//         { icon: Network, label: "System Architecture" },
//         { icon: GitBranch, label: "Project Management" },
//         { icon: LineChart, label: "Performance Optimization" },
//         { icon: Boxes, label: "System Integration" }
//       ]
//     },
//     {
//       name: "Harshitha M B",
//       id: "01FE23BCS193",
//       role: "Algorithm Specialist",
//       description: "Develops and implements efficient routing algorithms and optimization techniques",
//       github: "https://github.com",
//       email: "mailto:harshitha@example.com",
//       image: "/assets/images/harshitha",
//       icons: [
//         { icon: Code, label: "Algorithm Development" },
//         { icon: Terminal, label: "Implementation" },
//         { icon: Cpu, label: "Optimization" }
//       ]
//     },
//     {
//       name: "Archana K",
//       id: "01FE23BCS258",
//       role: "Data Structures Expert",
//       description: "Implements robust data structures for efficient route storage and retrieval",
//       github: "https://github.com",
//       email: "mailto:archana@example.com",
//       image: "/assets/images/archana",
//       icons: [
//         { icon: Database, label: "Data Structures" },
//         { icon: Code, label: "Implementation" },
//         { icon: Terminal, label: "Testing" }
//       ]
//     },
//     {
//       name: "Spoorthi L C",
//       id: "01FE23BCS255",
//       role: "Backend Developer",
//       description: "Manages server-side operations and database integration for route optimization",
//       github: "https://github.com",
//       email: "mailto:spoorthi@example.com",
//       image: "/assets/images/spoorthi",
//       icons: [
//         { icon: Database, label: "Backend Development" },
//         { icon: Network, label: "API Integration" },
//         { icon: Terminal, label: "Server Management" }
//       ]
//     },
//     {
//       name: "Sneha C",
//       id: "01FE23BCS501",
//       role: "UI/UX Designer",
//       description: "Creates user-friendly interfaces for route visualization and management",
//       github: "https://github.com",
//       email: "mailto:sneha@example.com",
//       image: "/assets/images/sneha",
//       icons: [
//         { icon: Layout, label: "UI Design" },
//         { icon: Code, label: "Frontend Development" },
//         { icon: Terminal, label: "Implementation" }
//       ]
//     }
//   ];

//   return (
//     <section className="container mx-auto px-4 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {teamMembers.map((member, index) => (
//           <Fade direction="up" triggerOnce delay={index * 200} key={member.id}>
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
//               <div className="relative group">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-theme-blue bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <div className="flex space-x-4">
//                     <a href={member.github} className="text-white hover:text-gray-200 transition-colors">
//                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                         <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
//                       </svg>
//                     </a>
//                     <a href={member.email} className="text-white hover:text-gray-200 transition-colors">
//                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-theme-blue mb-1">{member.name}</h3>
//                 <p className="text-sm text-gray-500 mb-2">{member.id}</p>
//                 <p className="text-md font-semibold text-gray-700 mb-2">{member.role}</p>
//                 <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                
//                 <div className="border-t pt-4">
//                   <div className="flex flex-wrap gap-4 justify-center">
//                     {member.icons.map((item, i) => (
//                       <div key={i} className="flex flex-col items-center group" title={item.label}>
//                         <item.icon className="w-6 h-6 text-theme-blue mb-1 group-hover:text-blue-600 transition-colors" />
//                         <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute mt-8">
//                           {item.label}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Network, GitBranch, LineChart, Boxes, Code, Terminal, Cpu, Database, Layout } from 'lucide-react';

const TeamSection = () => {
  const leadMember = {
    name: "Gouri Patil",
    id: "01FE23BCS022",
    role: "System Architect",
    description: "Develops scalable system architecture and implements optimization algorithms for public transport routing",
    github: "https://github.com/gouripatil06",
    email: "mailto:gouripatil2125@gmail.com",
    image: "https://i.ibb.co/BTnbnLV/gouri.jpg",
    icons: [
      { icon: Network, label: "System Architecture" },
      { icon: GitBranch, label: "Project Management" },
      { icon: LineChart, label: "Performance Optimization" },
      { icon: Boxes, label: "System Integration" },
    ],
  };

  const teamMembers = [
    {
      name: "Harshitha M B",
      id: "01FE23BCS193",
      role: "Algorithm Specialist",
      description: "Develops and implements efficient routing algorithms and optimization techniques",
      github: "https://github.com",
      email: "mailto:harshitha@example.com",
      icons: [
        { icon: Code, label: "Algorithm Development" },
        { icon: Terminal, label: "Implementation" },
        { icon: Cpu, label: "Optimization" },
      ],
    },
    {
      name: "Archana K",
      id: "01FE23BCS258",
      role: "Data Structures Expert",
      description: "Implements robust data structures for efficient route storage and retrieval",
      github: "https://github.com",
      email: "mailto:archana@example.com",
      icons: [
        { icon: Database, label: "Data Structures" },
        { icon: Code, label: "Implementation" },
        { icon: Terminal, label: "Testing" },
      ],
    },
    {
      name: "Spoorthi L C",
      id: "01FE23BCS255",
      role: "Backend Developer",
      description: "Manages server-side operations and database integration for route optimization",
      github: "https://github.com",
      email: "mailto:spoorthi@example.com",
      icons: [
        { icon: Database, label: "Backend Development" },
        { icon: Network, label: "API Integration" },
        { icon: Terminal, label: "Server Management" },
      ],
    },
    {
      name: "Sneha C",
      id: "01FE23BCS501",
      role: "UI/UX Designer",
      description: "Creates user-friendly interfaces for route visualization and management",
      github: "https://github.com",
      email: "mailto:sneha@example.com",
      icons: [
        { icon: Layout, label: "UI Design" },
        { icon: Code, label: "Frontend Development" },
        { icon: Terminal, label: "Implementation" },
      ],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Lead Profile Section */}
      <Fade direction="up" triggerOnce>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative group h-full">
                  <img
                    src={leadMember.image}
                    alt={leadMember.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute inset-0 bg-theme-blue bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={leadMember.github} className="text-white hover:text-gray-200 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href={leadMember.email} className="text-white hover:text-gray-200 transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold text-theme-blue mb-2">{leadMember.name}</h3>
                <p className="text-lg text-gray-500 mb-2">{leadMember.id}</p>
                <p className="text-xl font-semibold text-gray-700 mb-4">{leadMember.role}</p>
                <p className="text-gray-600 mb-6">{leadMember.description}</p>
                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-6 justify-start">
                    {leadMember.icons.map((item, i) => (
                      <div key={`lead-${i}`} className="flex flex-col items-center group" title={item.label}>
                        <item.icon className="w-8 h-8 text-theme-blue mb-1 group-hover:text-blue-600 transition-colors" />
                        <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute mt-10">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Team Members Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-theme-blue mb-12">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Fade direction="up" triggerOnce delay={index * 200} key={member.id}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-blue mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.id}</p>
                  <p className="text-md font-semibold text-gray-700 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                      {member.icons.map((item, i) => (
                        <div key={`${member.id}-${i}`} className="flex flex-col items-center group" title={item.label}>
                          <item.icon className="w-6 h-6 text-theme-blue mb-1 group-hover:text-blue-600 transition-colors" />
                          <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute mt-8">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
