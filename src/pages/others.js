import React from "react";
import "../styles/others.css";

export default function OthersSection() {
  return (
    <div className="others-container">
      {/* Skills Block - Full Width */}
      <div className="others-block full-width">
        <h3 className="others-title">SKILLS</h3>
        <ul className="others-list">
          <li className="others-item">
            <b>Technical:</b> Next.js, Typescript, GraphQL, Java, Python, HTML, CSS, JavaScript, C++, Node-RED, Arduino, Node.js, React, FastAPI, NoSQL (MongoDB), MySQL, ETL, Data Analysis, Data Wrangling
          </li>
          <li className="others-item">
            <b>Tools:</b> Microsoft Office (Excel, Word, PowerPoint), Figma, Docker, Scikit-learn
          </li>
          <li className="others-item">
            <b>Soft Skills:</b> Analytical thinking, Creative problem-solving, UI/UX design, Public speaking, Adaptability, Curiosity
          </li>
        </ul>
      </div>

      {/* Flex Row: Achievements & Languages */}
      <div className="others-flex-row">
        <div className="others-block half-width">
          <h3 className="others-title">ACHIEVEMENTS AND CERTIFICATIONS</h3>
          <ul className="others-list">
            <li className="others-item">
              Patent (Intellectual Property Rights) MusicMate – Issued: December 2023
            </li>
            <li className="others-item">
              Presenter at ICISS 2023 by IEEE and SCCIC – Issued: September 2023
            </li>
            <li className="others-item">
              Paper: “Using Machine Learning to Analyze the Effect of Antiretroviral Therapy on People with HIV”
            </li>
            <li className="others-item">
              Scrum Master I Certification – Issued: July 2023
            </li>
            <li className="others-item">
              IELTS: 6.5 – Issued: 10 Aug 2019
            </li>
            <li className="others-item">
              Brevet A & B Tax Training – TacTicTax – Issued: 19 November 2024
            </li>
          </ul>
        </div>

        <div className="others-block half-width">
          <h3 className="others-title">LANGUAGES</h3>
          <ul className="others-list">
            <li className="others-item">Bahasa Indonesia (Native)</li>
            <li className="others-item">English (Fluent)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
