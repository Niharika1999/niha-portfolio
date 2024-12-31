import React from 'react';
import Home from './Home';
import Projects from '../Projects/Projects';

const LandingPage = () => {
  return (
    <>
      <div className="home-section" id="home">
        <Home />
      </div>
      <div className="project-section" id="projects">
        <Projects />
      </div>
    </>
  );
};

export default LandingPage;