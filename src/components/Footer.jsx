import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2>Datalogsol</h2>
          <p>Your achievements are our goal.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
          
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#it-outsourcing">Outsourcing</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Address: 296 Herbert Macaulay Way, Sabo, Yaba, Lagos, Nigeria</p>
          <p>Phone: +234 805 8684588</p>
          <p>Email: hello@datalogsol.com</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Datalogsol. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
