// WorkExperience.js

import React from 'react';

const workExperience = [
  {
    title: 'Web Developer',
    company: 'Ducat India',
    role: 'Role & Responsibilities:',
    responsibilities: [
      'Gain expertise in HTML, CSS, JavaScript, and frameworks like React.js,',
      ' Work on creating UI components, improving design, and implementing user-friendly layouts.',
      'The focus is on learning, gaining practical exposure, and contributing to projects while under guidance',
    ],
    startDate: '01/2024',
    endDate: '07/2024',
    location: 'Gurugram, India',
    technologies: ['React.js', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Git', 'Github'],
  },
  {
    title: 'Java Developer',
    company: 'Anudip Foundation',
    role: 'Role & Responsibilities',
    responsibilities: [
      ' Core Java concepts such as OOP (Object-Oriented Programming), exception handling, multithreading, and collections',
      'Java technologies such as JDBC, Hibernate (JPA), Spring Framework, and how they apply to real-world projects',
      ' Understand relational databases (MySQL) and how to connect Java applications using JDBC for data persistence',
      
    ],
    startDate: '09/2024',
    endDate: 'Present',
    location: '',
    technologies: ['Core Java', 'My Sql', 'JDBC', 'Hiberate'],
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
