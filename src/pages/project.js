import React, { useState } from "react";
import "../styles/project.css";
import mockProjects from "../data/projectData"; // adjust if stored elsewhere

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      {mockProjects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onClick={() => handleCardClick(project)}
        >
          <h3 className="project-title">
            {project.id && `${project.id}: `}{project.title}
          </h3>

          <p className="project-description">{project.summary}</p>
        </div>
      ))}

      {/* Modal Popup */}
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <div className="pop_container">
              <div className="pop_title">
                {selectedProject.id && `${selectedProject.id}: `}
                {selectedProject.title}
              </div>
              <div
                className="pop_summary"
                dangerouslySetInnerHTML={{ __html: selectedProject.description }}
              ></div>
              <div className="pop_imgg multiple">
                {selectedProject.imageClasses?.length > 0
                  ? selectedProject.imageClasses.map((cls, index) => (
                    <div key={index} className={`pop-img ${cls}`}></div>
                  ))
                  : selectedProject.imageClass && (
                    <div className={`pop-img ${selectedProject.imageClass}`}></div>
                  )}
              </div>




              <div className="button-container">
                {selectedProject.github && (
                  <button className="button github">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </button>
                )}
                {selectedProject.youtube && (
                  <button className="button youtube">
                    <a href={selectedProject.youtube} target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
