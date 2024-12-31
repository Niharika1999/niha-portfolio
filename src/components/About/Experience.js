import React from "react";
import "./About.css"; // Import the CSS file

const Experience = () => {
  const experiences = [
    {
        company: "My New House",
        role: "Front-end Developer",
        duration: "July 2024 – Present",
      },
      {
        company: "George Mason University",
        role: "Digital Learning Intern - Stearns Center for Teaching and Learning",
        duration: "January 2024 – May 2024",
      },
      {
        company: "George Mason University",
        role: "Student Assistant – Department of Statistics",
        duration: "January 2023 – May 2024",
      },
      {
        company: "Accenture",
        role: "Application Development Associate",
        duration: "June 2021 – July 2022",
      },
  ];

  return (
    <div className="experience-container">
      <div className="experience-description">
        
        <p>
          I’ve worked with companies and clients, both in agency settings and as
          a freelancer. I enjoy collaborating with clients who appreciate the
          importance of good design.
        </p>
      </div>
      <div className="experience-table">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-row">
            <div className="experience-cell">{exp.company}</div>
            <div className="experience-cell">{exp.role}</div>
            <div className="experience-cell">{exp.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
