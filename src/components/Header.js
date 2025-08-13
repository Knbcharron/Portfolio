import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="site-name">K N B CHARRON</h1>
      </div>
      <div className="header-right">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Nav links - show on desktop or when menuOpen on mobile */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link onClick={() => setMenuOpen(false)} to="home" smooth={true} duration={500}>Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="about" smooth={true} duration={500}>About</Link>
          <Link onClick={() => setMenuOpen(false)} to="skills" smooth={true} duration={500}>Skills</Link>
          <Link onClick={() => setMenuOpen(false)} to="projects" smooth={true} duration={500}>Projects</Link>
          <Link onClick={() => setMenuOpen(false)} to="contact" smooth={true} duration={500}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;