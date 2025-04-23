// WorkExperience.js

import React from 'react';

const workExperience = [
  {
    title: 'TRC ENGINEER',
    company: 'Aforeserve Pvt limited',
    role: 'Role & Responsibilities:',
    responsibilities: [
      'Physically inspected and tested computer motherboards to ensure functionality and identify faults or defects.',
      'Verified key motherboard components including CPU, RAM slots, capacitors, and connectors for proper alignment and operation.',
      'Maintained accurate records of tested units, tracking serial numbers and test results for quality assurance.',
    ],
    startDate: '12/2024',
    endDate: '03/2024',
    location: 'Bengalore, India',
    technologies: ['ESD Protection Equipment'],
  },
  {
    title: 'Data Entry Operator',
    company: 'Oriental IT Services',
    role: 'Role & Responsibilities',
    responsibilities: [
      ' Entered, updated, and maintained accurate data in Excel spreadsheets and internal databases.',
      'Verified and corrected data to ensure high levels of accuracy and consistency.',
      ' Used Microsoft Excel functions such as VLOOKUP, pivot tables, and conditional formatting to manage and clean data.',
      
    ],
    startDate: '04/2024',
    endDate: '10/2024',
    location: 'Varanasi Uttar Pradesh',
    technologies: ['Microsoft Excel'],
  },
];

const WorkExperience = () => {
    return (
      <section className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-300">Training</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
              <h3 className="text-3xl font-semibold text-blue-300">{job.title}</h3>
              <p className="text-xl text-blue-200 mt-2">{job.company}</p>
              <p className="mt-2 text-sm text-blue-400">{job.startDate} – {job.endDate}</p>
              {job.location && <p className="text-sm text-blue-400">{job.location}</p>}
              <div className="mt-6">
                <h4 className="font-semibold text-lg text-blue-300">{job.role}</h4>
                <ul className="list-none mt-3 space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg text-blue-300">Technologies Used</h4>
                <ul className="flex flex-wrap gap-3 mt-3">
                  {job.technologies.map((tech, i) => (
                    <li key={i} className="bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm text-blue-200 hover:bg-blue-600 transition-colors duration-200">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default WorkExperience;
