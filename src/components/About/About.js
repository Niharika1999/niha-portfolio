import React, { Suspense, lazy } from 'react';
import './About.css';

const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));

function About() {
  return (
    <div className="about-container">
    <div className="container">
      <div className="leftSection">
        <h1 className="heading">About Me</h1>
        <p className="description">
          I love creating websites that blend seamless functionality with striking visuals, 
          making them a joy to explore. 
          My passion lies in crafting user-friendly experiences and diving into the world of digital marketing. 
          I’m constantly inspired by unique marketing ideas in everyday life, 
          believing in their power to elevate brands and small projects to extraordinary heights.
        </p>
        <p>I am dedicated to expanding my knowledge and expertise in my field. Throughout my journey, I've acquired various skills, which I continue to perfect.</p>
        <p>I dream of contributing to projects that not only look good but also do good — for people who engage with the applications. I'm also keen on exploring how AI can further personalize user experiences without losing the human touch.</p>
        <hr></hr>
        <h2>My Tool Kit</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <hr></hr>
        <h2>My Experiences</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
      </div>
      <div className="rightSection">
  <img
    src={`${process.env.PUBLIC_URL}/assets/about.png`}
    alt="About"
    className="image"
    loading="lazy"
  />
  <div className="songOfTheWeek">
    {/* <p >Song of the Week:</p> */}
    <iframe
      style={{ borderRadius: '12px',  }}
      src="https://open.spotify.com/embed/track/7F5oktn5YOsR9eR5YsFtqb?utm_source=generator" 
      width="100%" 
      height="140" 
      frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    ></iframe>
  </div>
</div>

    </div>
    
    </div>
  );
}

export default About;