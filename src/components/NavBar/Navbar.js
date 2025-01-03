import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* <div className="navbar-logo">Niharika Upadhyayula</div> */}
      <a href='/' className="navbar-logo">Niharika Upadhyayula</a>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link">HOME</Link>
        <Link to="/about" className="navbar-link">ABOUT</Link>
        <Link to="/projects" className="navbar-link">PROJECTS</Link>
        <Link to="https://drive.google.com/file/d/10kXfZHy7LY4HeYG1orFw4EkjrDvlZlgX/view?usp=sharing" className="navbar-link">RESUME</Link>
      </div>
    </nav>
  );
}

export default Navbar;
