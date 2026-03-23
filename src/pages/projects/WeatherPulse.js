import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';

function WeatherPulse() {
  return (
    <ProjectLayout
      title="Weather Pulse"
      tags={["React", "D3.js", "PWA", "Redis"]}
      description={`An elegant weather dashboard that aggregates data from multiple APIs to provide hyper-local forecasts with beautiful data visualizations. Built as a Progressive Web App, it works offline and can be installed on any device.

Key features include hourly and 7-day forecasts, interactive radar maps, severe weather alerts with push notifications, and historical weather data comparisons. The visualization layer uses D3.js to render animated charts that make complex meteorological data easy to understand.

The app fetches data from OpenWeatherMap and WeatherAPI, with a caching layer built on Redis to minimize API calls and improve response times.`}
      githubUrl="https://github.com/yourusername/weather-pulse"
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your actual video
      images={[
        // { src: "/resources/images/weather-pulse-dashboard.png", alt: "Weather dashboard", caption: "7-day forecast with D3 charts" },
      ]}
    />
  );
}

export default WeatherPulse;
