import React from 'react';
import profile from '../data/profile';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-title">{profile.title}</h2>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub
            </a>
            <a href={`mailto:${profile.social.email}`} className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Card */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-avatar">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              <div className="avatar-placeholder">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          <div className="about-info">
            <h3>{profile.name}</h3>
            <p className="about-title">{profile.title}</p>
            <p className="about-bio">{profile.bio}</p>
            <div className="about-socials">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.social.email}`}>Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some things I've been working on</p>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
