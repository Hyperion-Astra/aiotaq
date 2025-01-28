import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

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

  const handleNavItemClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close the menu on mobile
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="hero-section">
      {/* Navbar */}
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-logo">Datalogsol</div>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#services" onClick={(e) => handleNavItemClick(e, "services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#it-outsourcing" onClick={(e) => handleNavItemClick(e, "it-outsourcing")}>
              Outsourcing
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={(e) => handleNavItemClick(e, "technologies")}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavItemClick(e, "about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavItemClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-social-icons">
          <a href="https://www.facebook.com" className="social-icon" title="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.x.com" className="social-icon" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com" className="social-icon" title="Google Plus">
            <i className="fab fa-google-plus"></i>
          </a>
        </div>
      </motion.nav>

      {/* Hero Slider */}
      <Slider {...sliderSettings} className="hero-slider">
        {/* Page 1 */}
        <motion.div
          className="slider-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <header className="hero-header">
            <h1>SOFTWARE DESIGN WITH YOU IN MIND</h1>
            <p>
              We develop top-notch solutions that help grow your business and
              accelerate returns on investment. We follow <strong>next-generation</strong> approaches in software development to develop
              solutions that will give you a competitive edge.
            </p>
            <div className="hero-buttons">
              <a href="#services"><button className="btn btn-primary" onClick={(e) => handleNavItemClick(e, "services")}>
                Explore Services
              </button></a>
            </div>
          </header>
        </motion.div>

        {/* Page 2 */}
        <motion.div
          className="slider-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <header className="hero-header">
            <h1>POWER YOUR BUSINESS</h1>
            <p>
              Ready to transfer your strategies into a business process? Get
              <strong> Real Expertise</strong> from us. We help you ensure that
              every penny you spend leads to increased business performance.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={(e) => handleNavItemClick(e, "contact")}>
                Contact Us
              </button>
            </div>
          </header>
        </motion.div>
      </Slider>
        {/* Top Alert Section */}
        <p className="about-tagline">
        @Datalog; Your achievements is our goal
      </p>


        </div>
  );
};

export default HeroSection;
