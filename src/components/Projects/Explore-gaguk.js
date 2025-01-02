import React from "react";
import './Individual-project.css';
import { FaArrowLeft } from "react-icons/fa";

const ExploreGaguk = () => {
  return (
    <section className="layout-container">
        
        <div className="header-row">
        <a
          href="/projects" 
          className="back-button"
        >
          <FaArrowLeft />
        </a>
        <h1 className="project-name">Explore Gaguk</h1>
      </div>

    <div className="content-wrapper">
      {/* Left Column */}
      <div className="left-column">
        <h2>Project Info</h2>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="section-content">
          <h3>About</h3>
          <p>
          Discover music like never before with our innovative UI/UX project! Our platform brings together music streaming and artist discovery in a seamless, user-friendly experience. Explore your favorite artist’s discography with Spotify-embedded tracks, ensuring high-quality and legal streaming. Looking for more? Use our integrated search bar to instantly access related videos on YouTube. It's everything a music lover needs, all in one place! 🎶✨
          </p>
        </div>
        <div className="button-group">
            <a
              href="https://drive.google.com/file/d/1Az7cg0zOJ9PaQT7eQZnA2kDViZs9CI4G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Wireframe
            </a>
            <a
              href="https://niharika1999.github.io/Explore-Gaguk/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Live Website
            </a>
          </div>
      </div>
    </div>
  </section>
  );
};

export default ExploreGaguk;
