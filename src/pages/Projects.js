import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-listing">
      <h1 className="section-title">All Projects</h1>
      <p className="section-subtitle">Everything I've been building</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
