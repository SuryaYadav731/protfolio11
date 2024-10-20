
import React, { useState, useEffect } from 'react';
import './Header.css';
import MERN from '../assests/Resume.pdf';
import photoSurya from "../assests/photosurya.jpg";
const roles = [
  'Web Developer',
  'React Developer',
  'Frontend Developer',
  'Java Developer'
];

const Profile = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentRole(prevRole => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setTransitioning(false);
      }, 500); // Duration of the transition
    }, 3000); // Duration to show each role

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="bg-gradient-to-b from-gray-900 to-gray-900 p-6 text-white flex flex-col items-center">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-semibold mb-2 animate-fade-in">Surya Yadav</h1>
        <h2 className={`font-bold text-2xl md:text-4xl mt-1 gradient-text ${transitioning ? 'fade-out' : 'fade-in'}`}>
          {currentRole}
        </h2>
      </div>
      <div className="text-center mb-8">
        <img 
          src={photoSurya} 
          alt="Profile" 
          className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg transform transition-transform duration-500 hover:scale-105 animate-zoom-in" 
        />
        <p className="text-lg md:text-xl text-gray-200 w-[90%] md:w-[70%] mx-auto animate-fade-in">
        Creative and detail-oriented Frontend Developer with strong expertise in HTML, CSS, JavaScript, and React. Experienced in building responsive and user-friendly web applications, ensuring optimal performance and accessibility. Proficient in using tools like Bootstrap and Redux Toolkit to enhance user experience. Passionate about staying updated with the latest web technologies and best practices to deliver high-quality solutions.
        </p>
      </div>
      <a href={MERN} download target='_blank' className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
        Download CV
      </a>
    </section>
  );
};

export default Profile;

