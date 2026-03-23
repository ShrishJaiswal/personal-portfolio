import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectPage.css';

function ProjectLayout({ title, tags, description, githubUrl, videoUrl, images }) {
  return (
    <div className="project-page">
      <Link to="/projects" className="back-link">&larr; Back to Projects</Link>

      <header className="project-header">
        <h1 className="project-title">{title}</h1>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      <div className="project-body">
        {/* Description */}
        <div className="project-description">
          {typeof description === 'string'
            ? description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            : description}
        </div>

        {/* Images */}
        {images && images.length > 0 && (
          <div className="project-images">
            {images.map((img, i) => (
              <figure key={i} className="project-image">
                <img
                  src={process.env.PUBLIC_URL + img.src}
                  alt={img.alt || title}
                />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        {/* Video */}
        {videoUrl && (
          <div className="project-video">
            <h2>Demo</h2>
            <div className="video-wrapper">
              {videoUrl.startsWith('/resources') ? (
                <video controls width="100%">
                  <source src={process.env.PUBLIC_URL + videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={videoUrl}
                  title={`${title} demo`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        )}

        {/* GitHub Link */}
        <div className="project-links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
