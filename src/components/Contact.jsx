import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <h2 className="contact-title">GET IN TOUCH</h2>
      <p className="contact-subtitle">
        You can reach us through any one of the mediums below.
      </p>

      {/* Divider */}
      <div className="divider"></div>

      {/* Content Section */}
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h3 className="info-title">CONTACT INFO</h3>
          <div className="info-item">
            <span className="icon">&#127968;</span>
            <p>
              <strong>Address</strong>: 296 Herbert Macaulay Way, Sabo, Yaba,
              Lagos, Nigeria
            </p>
          </div>
          <div className="info-item">
            <span className="icon">&#128222;</span>
            <p>
              <strong>Phone</strong>: +234 805 8684588 <br />
            </p>
          </div>
          <div className="info-item">
            <span className="icon">&#128231;</span>
            <p>
              <strong>Email</strong>: hello@datalogsol.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">LEAVE A MESSAGE</h3>
          <form
          action="https://formspree.io/f/mqaepnly" // Replace with your Formspree endpoint
          method="POST">
            <input
              type="text"
              className="form-input"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              className="form-input"
              placeholder="contact@email.com"
            />
            <input
              type="tel"
              className="form-input"
              placeholder="Your Phone Number"
            />
            <textarea
              className="form-textarea"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="form-button">
              SEND QUERIES
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
