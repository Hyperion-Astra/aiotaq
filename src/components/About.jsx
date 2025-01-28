import React from "react";
import "./About.css"; // Link to the CSS file

const About = () => {
  return (
    <div className="about-container" id="about">
      {/* About Us Section */}
      <div className="about-section">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
        We are Creative and innovative solutions providers,  We develop customized  business process automation solutions that meet our clients need and give them competitive edge. We help our clients optimize their business in effective and less expense ways.</p>
        <p className="about-description">
        Our team is made up of seasoned business and technology professionals with several years of experience delivering innovative and effective solutions
        </p>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
};

export default About;
