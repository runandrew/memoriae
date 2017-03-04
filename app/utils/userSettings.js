// Required libraries
const settings = require('electron-settings');

settings.defaults({
  dbPath: 'not set'
});

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
