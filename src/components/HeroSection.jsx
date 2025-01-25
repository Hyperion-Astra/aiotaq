import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-section">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">Aiotaq</div>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#services" onClick={handleNavItemClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#it-department" onClick={handleNavItemClick}>
              Outsourcing
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavItemClick}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#resources" onClick={handleNavItemClick}>
              Resources
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavItemClick}>
              Contact
            </a>
          </li>
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

      {/* Hero Slider */}
      <Slider {...sliderSettings} className="hero-slider">
        {/* Page 1 */}
        <div className="slider-page">
          <header className="hero-header">
            <h1>SOFTWARE DESIGN WITH YOU IN MIND</h1>
            <p>
              We develop top-notch solutions that help grow your business and accelerate returns on investment. We
              follow <strong>next-generation</strong> approaches in software development to develop solutions that
              will give you a competitive edge.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Services</button>
            </div>
          </header>
        </div>

        {/* Page 2 */}
        <div className="slider-page">
          <header className="hero-header">
            <h1>POWER YOUR BUSINESS</h1>
            <p>
            Ready to transfer your strategies into a business process? Get<strong> Real Expertise</strong> from us. We help you ensure that every penny you spend leads to increased business performance.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Services</button>
            </div>
          </header>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
