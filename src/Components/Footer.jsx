import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id='contacts'
    className="bg-gradient-to-b from-gray-900 to-gray-900 text-gray-100 p-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Contact</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:suryayadav222003@gmail.com" className="hover:text-gray-300">suryayadav222003@gmail.com</a>
          </p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:7272807401" className="hover:text-gray-300">7272807401</a>
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Location</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Marathalli
          </p>
          <p className="py-1">Current:-Bengalore, Karnataka, 560037, India <br/>
          Permanent:- Varanasi Uttar Pradesh 221104</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/surya-yadav-b51007218/" className="text-gray-100 hover:text-gray-300" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/SuryaYadav731" className="text-gray-100 hover:text-gray-300" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <div className="text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Developed by @Surya Yadav</p>
      </div>
    </footer>
  );
};

export default Footer;
