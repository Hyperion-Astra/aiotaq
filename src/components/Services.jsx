import React from "react";
import "./Services.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const servicesData = [
  {
    icon: "fa-code",
    title: "WEB APPLICATION",
    description:
      "We Implement smart technologies to help small and medium businesses to always stay ahead of the competition. We develop customized business process automation solutions that are tailored to meet and our client.",
  },
  {
    icon: "fa-mobile",
    title: "MOBILE APPLICATION",
    description:
      "We build both native and web application for mobile device that run on the various mobile platforms e.g. iOS, Android. With our fast delivery, low cost and highly efficient mobile delivery skills , we help small and medium businesses work better.",
  },
  {
    icon: "fa-phone",
    title: "TELECOM APPLICATION",
    description:
      "We develop reliable USSD, SMS, WAP, IVR, MMS  applications that  offers unmatched value added services platform for our clients to deliver mobile content and applications in multiple locations, languages, and currencies to their target users quickly and cost effectively.",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">SERVICES</h2>
      <p className="services-subtitle">
        We offer various services ranging from Web to Mobile Applications Development, IT Outsourcing and IT Consulting Services.
        Below are some of our services</p>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <i className={`fa ${service.icon}`}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
