
import React from "react";
import Learn from "../assests/Learnit.png";
import billing from "../assests/billing.jpeg";
import image from "../assests/image.png";

function Projects() {
  const projects = [
    {
      title: "CodeBook",
      image: Learn,
      description: "Developed a comprehensive Code Store platform using the React.",
      features: [
        "Features for storing, updating, deleting, and viewing data. ",
        "Using React and the Redux Toolkit, along with HTML, CSS, JavaScript, Git and Github",
        "Using React for the UI and Redux Toolkit for managing the state makes the application easy to scale and maintain.",
        ,
      ],
      liveLink: "https://code-book-theta.vercel.app/",
      sourceLink: "https://github.com/SuryaYadav731/CodeBook",
    },
    {
      title: "Hotel Management System",
      image: billing,
      description: "The Java program connects to the MySQL database using JDBC, and reservation details are saved using an INSERT SQL query.",
      features: [
        "Reserve a Room",
        " Get Room Number",
        "Update Reservations.",
        "Delete Reservations",
      ],
      liveLink: "https://github.com/SuryaYadav731/Java25/tree/main/HotelReservation",
      sourceLink: "https://github.com/SuryaYadav731/Java25/tree/main/HotelReservation",
    },
    {
      title: "Dice Game",
      image: image,
      description: "Developed a feature-rich gaming platform using React and Styled.",
      features: [
        "Dice game website is built using React, where users select a number before rolling a dice.",
        "Once the user clicks the dice, a random number is generated. If the generated number matches the user's selected number, the score increases",
        "If the number is incorrect, 1 point is deducted from the total score",
        "This interactive feature helps engage users and provides a simple, dynamic gameplay experience.",
       
      ],
      liveLink: "https://dice-game-nine-jade.vercel.app/",
      sourceLink: "https://github.com/SuryaYadav731/Dice-Game",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Projects</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/100 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-300 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <ul className="list-none space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">View Project</button>
                  </a>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;