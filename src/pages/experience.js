import React from "react";
import "../styles/experience.css";
import rmitLogo from "../img/rmit.png";
import danamonLogo from "../img/danamon.png";
import astraLogo from "../img/astra.png";

const experiences = [
  {
        logo: rmitLogo,
    // logo: "/assets/rmit.png", 
    role: "Fullstack Developer – LookGlass (Capstone Project)",
    company: "RMIT University, Melbourne (Remote/Hybrid)",
    period: "March 2024 – June 2024",
    description:
      "Collaborated in a multidisciplinary team to develop LookGlass, a web-based tool that helps researchers and journalists detect and analyze climate change denial narratives in online news media using AI. Focused on backend development for scalable data pipelines, preprocessing workflows, and integration with Claude AI for news summarization. Also created a simple HTML interface to support frontend integration.",
  },
  {
        logo: danamonLogo,
    // logo: "/assets/danamon.png",
    role: "IT Monitoring Development",
    company: "PT. Bank Danamon Tbk – MBD, Kuningan - Jakarta, Indonesia",
    period: "1 February 2024 – 30 June 2024",
    description:
      "Worked on the Advanced Centralized Log (ACL) Project using the ELK stack. Designed dashboards in Kibana, implemented Grok parsing, and optimized Logstash pipelines. Installed agents, conducted log analysis for ML potential, and contributed to documentation and architecture diagrams.",
  },
  {
        logo: astraLogo,
    // logo: "/assets/astra.png",
    role: "Software Engineer",
    company: "Astra Tech – Cikarang, West Java, Indonesia",
    period: "August 2023 – October 2023",
    description:
      "Developed a web-based IoT project using Node-RED to collect electricity usage data, convert it to Indonesian Rupiah, and store it in InfluxDB. Integrated threshold and alert systems to trigger email notifications. Also gained experience with PMC, HMI, and microcontroller programming.",
  },
];
export default function ExperienceSection() {
  return (
    <div className="experience-container">
      {experiences.map((exp, idx) => (
        <div className="experience-card fade-in" key={idx}>
          <div className="experience-logo-wrapper">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="experience-logo"
            />
          </div>
          <div className="experience-details">
            <h3 className="experience-role">{exp.role}</h3>
            <div className="experience-meta">
              <span className="experience-company">{exp.company}</span><br />
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
