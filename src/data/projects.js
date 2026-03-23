const projects = [
  {
    slug: "smart-task-manager",
    title: "Smart Task Manager",
    description: `A full-featured task management application built with React and Node.js. This project implements real-time collaboration, drag-and-drop task organization, and intelligent priority suggestions powered by a simple ML model.

Users can create workspaces, invite team members, and track progress through customizable Kanban boards. The app features a clean, responsive interface with dark mode support, keyboard shortcuts for power users, and comprehensive search with filters.

The backend uses Express.js with PostgreSQL for data persistence, Socket.io for real-time updates, and JWT-based authentication. Deployed on AWS with CI/CD via GitHub Actions.`,
    shortDescription: "A full-featured task management app with real-time collaboration, drag-and-drop Kanban boards, and intelligent priority suggestions.",
    githubUrl: "https://github.com/yourusername/smart-task-manager",
    videoUrl: "", // optional: add a YouTube/Vimeo embed URL
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    featured: true,
  },
  {
    slug: "weather-pulse",
    title: "Weather Pulse",
    description: `An elegant weather dashboard that aggregates data from multiple APIs to provide hyper-local forecasts with beautiful data visualizations. Built as a Progressive Web App, it works offline and can be installed on any device.

Key features include hourly and 7-day forecasts, interactive radar maps, severe weather alerts with push notifications, and historical weather data comparisons. The visualization layer uses D3.js to render animated charts that make complex meteorological data easy to understand.

The app fetches data from OpenWeatherMap and WeatherAPI, with a caching layer built on Redis to minimize API calls and improve response times.`,
    shortDescription: "An elegant weather dashboard with hyper-local forecasts, interactive radar maps, and beautiful D3.js data visualizations.",
    githubUrl: "https://github.com/yourusername/weather-pulse",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with your actual video
    tags: ["React", "D3.js", "PWA", "Redis"],
    featured: true,
  },
  {
    slug: "devlog-engine",
    title: "DevLog Engine",
    description: `A minimalist blogging platform designed specifically for developers. It supports Markdown with syntax highlighting, LaTeX math expressions, and embedded code playgrounds that let readers run code snippets directly in the browser.

The platform features a distraction-free writing editor, automatic table of contents generation, SEO optimization, RSS feed support, and a built-in analytics dashboard. Posts can be tagged and organized into series for multi-part tutorials.

Built with Next.js for server-side rendering, styled with Tailwind CSS, and backed by a headless CMS. The code playground feature uses sandboxed iframes with support for JavaScript, Python, and Rust.`,
    shortDescription: "A minimalist blogging platform for developers with Markdown support, syntax highlighting, and embedded code playgrounds.",
    githubUrl: "https://github.com/yourusername/devlog-engine",
    videoUrl: "",
    tags: ["Next.js", "Tailwind CSS", "Markdown", "CMS"],
    featured: true,
  },
];

export default projects;
