import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (e) => {
    const navItems = document.querySelectorAll(".navbar-menu li a");
    navItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="hero-section">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">Aiotaq</div>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li><a href="#services" onClick={handleNavItemClick}>Services</a></li>
          <li><a href="#it-department" onClick={handleNavItemClick}>IT Department</a></li>
          <li><a href="#skills" onClick={handleNavItemClick}>Skills</a></li>
          <li><a href="#portfolio" onClick={handleNavItemClick}>Portfolio</a></li>
          <li><a href="#resources" onClick={handleNavItemClick}>Resources</a></li>
          <li><a href="#contact" onClick={handleNavItemClick}>Contact</a></li>
        </ul>
        <div className="navbar-social-icons">
          <a href="#" className="social-icon" title="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="social-icon" title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="social-icon" title="Google Plus">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
      </nav>

      <header className="hero-header">
        <h1>We Build Software That Exceed Your Expectations</h1>
        <p>
          With Over 9 years Experience in Software Development, <strong>Aiotaq Integrated</strong> has built, and is still building, powerful Software Solutions On Web Applications, Mobile Applications, and Telecom Applications.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View Portfolio</button>
          <button className="btn btn-secondary">Request a Quote</button>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
