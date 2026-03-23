import SmartTaskManager from './SmartTaskManager';
import WeatherPulse from './WeatherPulse';
import DevLogEngine from './DevLogEngine';

// Maps each project slug to its component.
// When you add a new project, import its component and add an entry here.
const projectComponents = {
  'smart-task-manager': SmartTaskManager,
  'weather-pulse': WeatherPulse,
  'devlog-engine': DevLogEngine,
};

export default projectComponents;
