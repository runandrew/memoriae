// Required libraries
const settings = require('electron-settings');

// Set default values
settings.defaults({
  dbPath: '/Users/andrewgarcia/Desktop/'
});
settings.applyDefaultsSync();

// Create events for logging
// TODO: make only for development
settings.on('create', pathToSettings => {
  console.log('Setting path created: ', pathToSettings);
});

settings.on('write', () => {
  console.log('Settings have been saved.');
});

module.exports = {
  settings
};
