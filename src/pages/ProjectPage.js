import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectComponents from './projects/index';

function ProjectPage() {
  const { slug } = useParams();
  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectComponent />;
}

export default ProjectPage;
