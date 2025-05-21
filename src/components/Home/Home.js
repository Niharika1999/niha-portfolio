import React from 'react';
import './Home.css';
import Projects from '../Projects/Projects';

export default function Home() {
  return (
    <>
      {/* Main Container */}
      <div className="container">
        <div className="leftSection">
          <h1 className="heading">
            Hi! This is Niharika, a website designer and developer.
          </h1>
          <p className="description">
            I love creating websites that blend seamless functionality with striking visuals, 
            making them a joy to explore. 
            My passion lies in crafting user-friendly experiences and diving into the world of digital marketing. 
            I’m constantly inspired by unique marketing ideas in everyday life, 
            believing in their power to elevate brands and small projects to extraordinary heights.
          </p>
          <a href="mailto:niharika.u03@gmail.com">
            <button className="button-primary">Get in Touch →</button>
          </a>
          <a href="https://niharika-upadhyayula.framer.website/">
            <button className="button-primary">New Website</button>
          </a>
        </div>
        <hr></hr>
        <div className="rightSection">
          <img
            src={`${process.env.PUBLIC_URL}/assets/computer-work.gif`}
            alt="Computer Work"
            className="image"
          />
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="projects-section">
       
        <Projects />
      </div>
    </>
  );
}
