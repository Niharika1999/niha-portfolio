import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Import the separate CSS file

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UI Companion Tool",
      description:
        "Streamline your web development with our all-in-one front-end code repository! Browse, select, and integrate components like Navbars, Forms, and Dropdowns effortlessly. Use our dynamic checklist to generate ready-to-use templates with your chosen elements. Everything you need for fast, efficient web design—all in one place! 🚀",
      tags: ["UX/UI Developer", "Programming Tool"],
      image: `${process.env.PUBLIC_URL}/assets/ui-companion-tool.png`,
      path: "/ui-companion-tool", // Route path for this project
    },
    {
      id: 2,
      title: "Explore Gagugk",
      description:
        "Discover music like never before with our innovative UI/UX project! Our platform brings together music streaming and artist discovery in a seamless, user-friendly experience. Explore your favorite artist’s discography with Spotify-embedded tracks, ensuring high-quality and legal streaming. Looking for more? Use our integrated search bar to instantly access related videos on YouTube. It's everything a music lover needs, all in one place! 🎶✨",
      tags: ["UX/UI Developer", "Music Streaming"],
      image: `${process.env.PUBLIC_URL}/assets/explore-gaguk.png`,
      path: "/explore-gagugk", // Route path for this project
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
    <div className="project-grid">
      {projects.map((project) => (
        <Link to={project.path} key={project.id} className="project-card-link">
          <div className="project-card">
            <img
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="project-image"
            />
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            <div className="skills-container">
              {project.tags.map((tag, index) => (
                <span key={index} className="skill-button">{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Projects;
