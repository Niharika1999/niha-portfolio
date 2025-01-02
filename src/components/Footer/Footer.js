import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Short Description */}
      <div className="footer-description">
        <p>Welcome to the footer—a.k.a. the part of the website where I pretend you’re still reading. This portfolio was fueled by coffee, Wi-Fi tantrums, and a suspicious amount of snacks. If you’re here to hire me, collaborate, or send memes, hit me up. Bonus points for song reccomendations.🐱</p>
      </div>

      {/* Links to Pages */}
      <div className="footer-links">
        <div className="footer-links-container">
        <a href="#about">Home</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">About</a>
        <a href="#contact">Resume</a>
        </div>
        <div className="footer-links-container">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:your-email@example.com">
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
