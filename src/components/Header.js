import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="site-name">K N B CHARRON</h1>
      </div>
      <div className="header-right">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;
