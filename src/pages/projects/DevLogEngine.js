import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';

function DevLogEngine() {
  return (
    <ProjectLayout
      title="DevLog Engine"
      tags={["Next.js", "Tailwind CSS", "Markdown", "CMS"]}
      description={`A minimalist blogging platform designed specifically for developers. It supports Markdown with syntax highlighting, LaTeX math expressions, and embedded code playgrounds that let readers run code snippets directly in the browser.

The platform features a distraction-free writing editor, automatic table of contents generation, SEO optimization, RSS feed support, and a built-in analytics dashboard. Posts can be tagged and organized into series for multi-part tutorials.

Built with Next.js for server-side rendering, styled with Tailwind CSS, and backed by a headless CMS. The code playground feature uses sandboxed iframes with support for JavaScript, Python, and Rust.`}
      githubUrl="https://github.com/yourusername/devlog-engine"
      videoUrl="" // optional: "/resources/videos/devlog-engine-demo.mp4"
      images={[
        // { src: "/resources/images/devlog-editor.png", alt: "Editor view", caption: "Distraction-free Markdown editor" },
      ]}
    />
  );
}

export default DevLogEngine;
