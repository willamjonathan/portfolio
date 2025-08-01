import React from "react";
import '../styles/information.css';
import pinIcon from '../img/pin.png';

export default function InfoSection() {
  return (
    <div className="info-wrapper">
      <div className="info-hero">
        <div className="info-text-section">
          <p className="info-greeting">Hi, my name is</p>
          <h1 className="info-name">William Jonathan Mulyadi</h1>
          <p className="info-role">A Computer Science graduate</p>
          <div className="info-location">
            <img src={pinIcon} alt="location" className="location-icon" />
            <span>Bandung, Indonesia</span>
          </div>

          <div className="info-socials">
            <a href="mailto:william.mulyadi02@gmail.com" className="social-icon">@</a>
            <a href="https://github.com/willamjonathan" target="_blank" rel="noreferrer" className="social-icon">G</a>
            <a href="https://linkedin.com/in/william-jonathan-mulyadi-020888194" target="_blank" rel="noreferrer" className="social-icon">in</a>
          </div>
        </div>

        <div className="info-image-section">
          <div className="info-profile-picture"></div>
        </div>
      </div>

      <div className="info-description">
        <div className="education-section">
          <div className="education-title">Description</div>
          <div className="education-list">
            A dedicated and agile <span className="font-medium">Computer Science and Information Technology</span> graduate, excelling both independently and in teams under pressure, and committed to excellence. 
            My profound passion lies in the pursuit of continuous learning and the embracement of challenges as avenues for personal and professional advancement. 
            <span className="font-medium">I firmly believe that challenges present invaluable opportunities for growth and I eagerly embrace them to further develop my skills and expertise.</span>
          </div>
        </div>

        <div className="education-section">
          <div className="education-title">Education</div>
          <div className="education-list">
            <ul>
              <li>
                Royal Melbourne Institute of Technology (2024–2025) –
                <span className="font-medium"> B. Info Tech</span>
              </li>
              <li>
                Bina Nusantara International University (2021–2025) –
                <span className="font-medium"> S. IlKom</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
