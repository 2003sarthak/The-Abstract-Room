import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from '../../homeimg/logo.png'
import buttonImage from '../../homeimg/navbarimg.png'
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            What Are We?
          </Link>
          <Link to="/whatdone" onClick={() => setIsOpen(false)}>
            What Have We Done?
          </Link>
          <Link to="/commscr" onClick={() => setIsOpen(false)}>
            Community Screenings
          </Link>
          <Link to="/doubt" onClick={() => setIsOpen(false)}>
            Doubts?
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Get In Touch
          </Link>
        </div>
        <Link
          to="/contact"
          className="action-button"
          onClick={() => setIsOpen(false)}
        >
          <div className="button-image-wrapper">
            <img src={buttonImage} alt="Button Icon" className="button-image" />
            <span className="button-text">BECOME A MEMBER</span> 
          </div>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
