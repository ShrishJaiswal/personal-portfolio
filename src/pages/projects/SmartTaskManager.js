import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';

function SmartTaskManager() {
  return (
    <ProjectLayout
      title="Smart Task Manager"
      tags={["React", "Node.js", "PostgreSQL", "Socket.io"]}
      description={`A full-featured task management application built with React and Node.js. This project implements real-time collaboration, drag-and-drop task organization, and intelligent priority suggestions powered by a simple ML model.

Users can create workspaces, invite team members, and track progress through customizable Kanban boards. The app features a clean, responsive interface with dark mode support, keyboard shortcuts for power users, and comprehensive search with filters.

The backend uses Express.js with PostgreSQL for data persistence, Socket.io for real-time updates, and JWT-based authentication. Deployed on AWS with CI/CD via GitHub Actions.`}
      githubUrl="https://github.com/yourusername/smart-task-manager"
      videoUrl="" // optional: YouTube embed URL or "/resources/videos/smart-task-manager-demo.mp4"
      images={[
        // { src: "/resources/images/smart-task-manager-screenshot.png", alt: "Dashboard view", caption: "Kanban board with drag-and-drop" },
      ]}
    />
  );
}

export default SmartTaskManager;
