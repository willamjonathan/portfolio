import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

// Import each section component
import InfoSection from "./pages/information";
import ExperienceSection from "./pages/experience";
import ProjectSection from "./pages/project";
import OthersSection from "./pages/others";
import ContactSection from "./pages/contact";

const sections = ["Information", "Experience", "Projects", "Others", "Contact"];

export default function Portfolio() {
  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <div className="portfolio-header-content">
          <h1 className="portfolio-title">William Jonathan Mulyadi</h1>
          <nav className="portfolio-nav">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="portfolio-nav-button"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Sections with scroll-triggered fly-up + fade-in */}
      <main className="portfolio-main">
        {sections.map((section, index) => (
          <motion.section
            id={section.toLowerCase()}
            key={section}
            className={`portfolio-section ${
              index % 2 === 0 ? "section-bg-odd" : "section-bg-even"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="portfolio-section-inner">
              <h2 className="portfolio-section-title">{section}</h2>

              {section === "Information" ? (
                <InfoSection />
              ) : section === "Experience" ? (
                <ExperienceSection />
              ) : section === "Projects" ? (
                <ProjectSection />
              ) : section === "Others" ? (
                <OthersSection />
              ) : section === "Contact" ? (
                <ContactSection />
              ) : null}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} William Jonathan. All rights reserved.
      </footer>
    </div>
  );
}
