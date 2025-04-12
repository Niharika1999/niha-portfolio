import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Short Description */}
      <div className="footer-description">
        <p>Welcome to the footer—a.k.a. the part of the website where I pretend you’re still reading. This portfolio was fueled by water(not coffee), Wi-Fi tantrums, and a suspicious amount of snacks. If you’re here to hire me, collaborate, or send memes, hit me up. Bonus points for song reccomendations.🐱</p>
      </div>

      {/* Links to Pages */}
      <div className="footer-links">
        <div className="footer-links-container">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="https://drive.google.com/file/d/10kXfZHy7LY4HeYG1orFw4EkjrDvlZlgX/view?usp=sharing">Resume</a>
        </div>
        <div className="footer-links-container">
          <a href="https://www.linkedin.com/in/niharika-upadhyayula/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:niharika.u03.com">
            <FaEnvelope /> Mail
          </a>
        </div>
      </div>
      
      

      {/* LinkedIn Icon */}
      {/* <div className="footer-socials">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="path-to-linkedin-icon" // Replace with your LinkedIn icon path
            alt="LinkedIn"
            className="footer-social-icon"
          />
        </a>
      </div> */}

      {/* Footer Bottom */}
      <div className="footer-bottom"> Here’s a riddle: What’s funny, creative, and full of potential? <br></br> © {currentYear} [Niharika]. </div>
    </footer>
  );
};

export default Footer;
