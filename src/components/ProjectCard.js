import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.slug}`} className="project-card">
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.shortDescription}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className="project-card-link">View Project &rarr;</span>
      </div>
    </Link>
  );
}

export default ProjectCard;
