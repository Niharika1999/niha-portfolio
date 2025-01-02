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
      <div className="navbar-logo">Niharika Upadhyayula</div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link">HOME</Link>
        <Link to="/about" className="navbar-link">ABOUT</Link>
        <Link to="/projects" className="navbar-link">PROJECTS</Link>
      </div>
    </nav>
  );
}

export default Navbar;
