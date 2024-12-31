import React from 'react';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className="about-container">
            {/* Top Section */}
            <div className="about-top">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p className="description">
                        I’m passionate about designing and delivering engaging user experiences that bring innovative ideas to life. My focus is on transforming concepts into visually stunning and user-friendly digital solutions. From ideation to prototyping, I create designs that not only look exceptional but also offer seamless, intuitive interactions.
                    </p>
                    <p>
                        Combining creativity with technical expertise, I specialize in crafting professional websites that captivate audiences and enhance online presence. My dedication to continuous learning drives me to refine my skills and stay ahead in the ever-evolving design landscape.
                    </p>
                    <p>
                        I aspire to contribute to meaningful projects that are both visually appealing and impactful — creating solutions that resonate with users. I’m particularly interested in exploring how AI can personalize user experiences while maintaining a human-centric approach.
                    </p>
                    <p>
                        Outside of work, I enjoy photography and music. Scroll down to check out some of my favorite shots!
                    </p>
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
                
                <div className="about-image">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/about.png`} // Replace with your actual image URL
                        alt="About Me"
                        className="rounded-image"
                    />
                </div>
            </div>

            {/* Divider */}
            <hr className="divider" />

{/*            
            <div className="about-bottom">
                <div className="about-education">
                    <h2>Education</h2>
                    <p>
                        I earned my Bachelor's degree in Web Design and Development from XYZ University, where I honed my skills in design
                        principles, user experience, and front-end development. My education provided a solid foundation for my career in
                        web design.
                    </p>
                    <a href="/projects" className="button-primary">View Projects →</a>
                </div>
                <div className="about-stack">
                    <h2>Resume</h2>
                    <p>
                        Click below to view my resume and explore my professional experience and skills in more detail.
                    </p>
                    <a href="/path-to-resume.pdf" className="button-primary" target="_blank" rel="noopener noreferrer">View Resume →</a>
                </div>

            </div>
            <hr className="divider" /> */}
        </div>
    );
};

export default AboutMe;
