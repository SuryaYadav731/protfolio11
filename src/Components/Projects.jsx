
import React from "react";
import Learn from "../assests/Learnit.png";
import billing from "../assests/billing.png";
import image from "../assests/image.png";

function Projects() {
  const projects = [
   
    {
      title: "Zomato Analytics Dashboard",
      image: billing,
      description: "Designed and developed dynamic dashboards using Power BI to visualize key business metrics related to order performance, customer preferences, and restaurant analytics.",
      features: [
        "Designed and developed dynamic dashboards using Power BI to visualize order performance, customer preferences, and restaurant performance. ",
        " Integrated key metrics such as Total Orders, Average Delivery Time, Average Order Value (AOV), and Customer Satisfaction Scores.",
        " Applied filters for Date, Location, Cuisine, Rating, and Discount Status to enable granular data analysis.",
      ],
      liveLink: "https://www.linkedin.com/feed/update/urn:li:activity:7318317497370193920/",
      sourceLink: "https://www.linkedin.com/feed/update/urn:li:activity:7318317497370193920/",
    },
    {
      title: "Netflix Data Analysis ",
      image: image,
      description: "Conducted in-depth analysis of Netflix’s content library to understand platform strategy and content trends.",
      features: [
        "Analyzed the distribution of Movies vs TV Shows to understand Netflix’s content strategy.",
        "Filtered and extracted movies released in specific years, such as 2020, for time-based trend analysis.",
        "Identified Top 5 countries producing the most content on the platform.",
        "Extracted data to find the longest movie based on duration.",
       
      ],
      liveLink: "https://www.linkedin.com/feed/update/urn:li:activity:7314534707495387137/",
      sourceLink: "https://www.linkedin.com/feed/update/urn:li:activity:7314534707495387137/",
    },
    {
      title: "Cricket Analysis",
      image: Learn,
      description: "Developed a reusable Python script for cleaning messy datasets using Pandas, designed to ensure data integrity and prepare data for high-quality analysis with minimal manual intervention.",
      features: [
        "Loaded CSV files into Pandas DataFrames for processing.",
        "Handled missing values by using imputation techniques or removing rows/columns as needed. ",
        "Standardized column names by converting to lowercase and replacing spaces with underscores for consistency.",
        ,
      ],
      liveLink: "https://www.linkedin.com/analytics/post-summary/urn:li:activity:7312820337560195073/",
      sourceLink: "https://www.linkedin.com/analytics/post-summary/urn:li:activity:7312820337560195073/",
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