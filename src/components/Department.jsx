import React from "react";
import "./Department.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const departmentFeatures = [
  {
    icon: "fa-code",
    title: "SOFTWARE(S)",
    description:
      "We deliver customized applications, web portals, marketing tools, eCommerce platforms, CRM, HR solutions, and more—everything you need to run your business smoothly and efficiently.",
  },
  {
    icon: "fa-dollar-sign",
    title: "REDUCED COST",
    description:
      "Reduce cost of hiring & training IT staff. This will free up your resources to focus on their core competencies while we manage your IT needs – software, network, storage, and technical support."
  },
  {
    icon: "fa-tags",
    title: "SPEND LESS",
    description:
      "Spend less on your IT subscription while gaining high-value services, expertly managed to handle all your IT needs efficiently and professionally."
  },
  {
    icon: "fa-users",
    title: "IT TRAINING",
    description:
      "We provide personalized training for your staff on new or existing applications that we manage for your organization—ensuring seamless adoption and maximum productivity.",
  },
];

const Department = () => {
  return (
    <div className="department-section" id="it-outsourcing">
      <div className="department-overlay">
        <h2 className="department-title">IT OUTSOURCING</h2>
        <p className="department-description">
          We help Small and Medium Businesses manage their IT infrastructure and services,
          providing the necessary software/tools needed to support their business operations. This enables them to focus on their core business. Benefits include:
        </p>
        <p className="department-description">
          Below are some of the benefits you get when we help with your IT Outsourcing:
        </p>
        <div className="department-features">
          {departmentFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fa ${feature.icon}`}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
