import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';

function SampleSpringAI() {
  return (
    <ProjectLayout
      title="Custom Shell"
      tags={["SpringAI", "OpenAI API", "Ollama (Mistral)", "Insomnia", "SpringBoot", "RAG", "Chat Client", "LLM Integration", "Embeddings", "Vector Search"]}
      description={`A hands-on walkthrough of building AI-powered applications with Spring AI, demonstrating integration with both OpenAI and Ollama (Mistral) as LLM providers. The project also includes a Retrieval-Augmented Generation (RAG) implementation using a product details knowledge base.`}
      githubUrl="https://github.com/projects-book/sample-spring-ai"
      videoUrl=""
      images={[
        { src: "/resources/images/sample-spring-ai-snapshot.png", alt: "Spring AI" },
      ]}
    />
  );
}

export default SampleSpringAI;

