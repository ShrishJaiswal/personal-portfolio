import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';

function CustomShell() {
  return (
    <ProjectLayout
      title="Custom Shell"
      tags={["Java Core", "Maven"]}
      description={`A Unix-like interactive shell implemented in Java that supports built-in commands, pipelines, tab-completion, redirection, and execution of external programs.`}
      githubUrl="https://github.com/projects-book/custom-shell"
      videoUrl=""
      images={[
        { src: "/resources/images/custom-shell-snapshot.png", alt: "Custom Shell" },
      ]}
    />
  );
}

export default CustomShell;

