import React, { useState } from 'react';
import './AboutMe.css';
import PolaroidGallery from './PolaroidGallery';

const AboutMe = () => {
    const [randomFact, setRandomFact] = useState('');
    const [isClicked, setIsClicked] = useState(true);

    const facts = [
        "Back in undergrad, I was the Planning Head for a student org. Translation: professional fire extinguisher of last-minute disasters.",
        "2024: The year I became a concert junkie with *three* back-to-back shows. Now I get why people cry at live music.",
        "Photography is my passion... and my excuse to tell people to 'hold still!'",
        "Finally gave into the One Piece hype. Currently on Punk Hazard, and still no idea where the treasure is. Send snacks.",
        "Saw Taylor Swift live, and let me tell you – the screaming, crying, and throwing up? All me.",
        "My top albums right now? evermore, The War, and SOMO:FUME.",
        "My IDE is my happy place. Well, until the red squiggly lines show up.",
        "Dark mode isn’t a preference; it’s a personality trait.",
        "My relationship with color palettes? It’s complicated, but we make it work—eventually.",
        "When my code works, I’m convinced I’m a wizard. When it doesn’t, it’s a ‘learning opportunity.’"
    ];
    
    const displayRandomFact = () => {
        const fact = facts[Math.floor(Math.random() * facts.length)];
        setRandomFact(fact);
    };
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
                            style={{ borderRadius: '12px', }}
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
                        src={`${process.env.PUBLIC_URL}/assets/about.png`}
                        alt="About Me"
                        className="rounded-image"
                    />
                    <div className={`image-button-container ${isClicked ? 'clicked' : ''}`}>
                        <button
                            onClick={displayRandomFact}
                            className="image-button"
                        ></button>
                        {randomFact && <p className="random-fact">{randomFact}</p>}

                    </div>
                </div>
            </div>

            {/* Divider */}
            {/* <hr className="divider" /> */}

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
            {/* <PolaroidGallery/> */}
        </div>
    );
};

export default AboutMe;
