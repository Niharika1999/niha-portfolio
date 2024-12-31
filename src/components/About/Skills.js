import React from "react";
import "./About.css"; // Import the CSS file

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Next.js', 'CSS', 'Figma'];


  return (
     <div className="skills-container">
    {skills.map((skill, index) => (
      <div key={index} className="skill-button">
        {/* <span className="skill-icon">•</span> */}
        <span>{skill}</span>
      </div>
    ))}
  </div>
  );
};

export default Skills;