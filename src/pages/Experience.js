import React from 'react';
import experience from '../data/experience';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h1 className="section-title">Experience</h1>
      <p className="section-subtitle">My professional journey so far</p>

      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-dot" />
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
