import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">Niharika Upadhyayula</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">HOME</Link>
        <Link to="/about" className="navbar-link">ABOUT</Link>
        <Link to="/projects" className="navbar-link">PROJECTS</Link>
        {/* <button className="button-primary">
          <Link to="/contact" className="navbar-link">GET IN TOUCH</Link>
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
