import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
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
              <strong>Address</strong>:J222 Ikota Shopping Complex
            By VGC Ajah,  Lagos Nigeria.
            </p>
          </div>
          <div className="info-item">
            <span className="icon">&#128222;</span>
            <p>
              <strong>Phone</strong>: +234 905834 3900
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
    method="POST"
  >
    <input
      type="text"
      name="name" // Add a `name` attribute for each input
      className="form-input"
      placeholder="Your Full Name"
      required
    />
    <input
      type="email"
      name="email"
      className="form-input"
      placeholder="contact@email.com"
      required
    />
    <input
      type="tel"
      name="phone"
      className="form-input"
      placeholder="Your Phone Number"
    />
    <textarea
      name="message"
      className="form-textarea"
      placeholder="Your Message"
      required
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
