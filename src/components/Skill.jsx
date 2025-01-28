import React from "react";
import "./Skill.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skillsData = [
  {
    title: "Laravel Framework (php)",
    description: "We use a high-performance PHP framework for web apps development",
    icon: "fa-code",
  },
  {
    title: ".NET (C# & VB)",
    description: "We use C# & VB for building web, mobile, and desktop applications",
    icon: "fa-code",
  },
  {
    title: "PYTHON",
    description:
      "Using twisted (Python framework), we have built powerful telecom apps",
    icon: "fa-code",
  },
  {
    title: "ANGULARJS",
    description: "Coupled with Java, AngularJs is use by our team deliver frontend of our web apps",
    icon: "fa-code",
  },
  {
    title: "FLUTTER",
    description: "UI framework for crafting high-quality native interfaces on iOS, Android",
    icon: "fa-code",
  }
];

const Skills = () => {
  return (
    <div className="skills-section" id="technologies">
      <h2 className="skills-title">TECHNOLOGIES</h2>
      <p className="skills-description">
      We leverage a wide range of technologies to deliver tailored solutions across various aspects of business operations. Our expertise includes PHP, Laravel framework, Python, Java, .NET, HTML, CSS, and more.</p>
      <div className="skills-content">
        <div className="skills-image">
          <img
            src="../assets/skill.png"
            alt="Showcasing projects on different devices"
          />
        </div>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <i className={`fa ${skill.icon}`}></i>
              </div>
              <div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
