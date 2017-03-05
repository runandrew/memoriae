// Required libraries
const settings = require('electron-settings');

// Required files
const { getDbPathUserInput } = require('./userDialog');

settings.clearSync(); // TODO: temporary to simulate new user

// Create events for logging
// TODO: make only for development
settings.on('create', pathToSettings => {
  console.log('Setting path created: ', pathToSettings);
});

settings.on('write', () => {
  console.log('Settings have been saved.');
});

// User functions
const addDbPath = (path) => {
  settings.setSync('dbPath', path);
  console.log('Set dbPath to: ', path);
};

const checkDbPath = () => {
  return settings.hasSync('dbPath');
};

const setDbPath = () => {
  const newPath = getDbPathUserInput();
  addDbPath(newPath);
};

const getDbPath = () => {
  return settings.getSync('dbPath');
};

module.exports = {
  settings,
  setDbPath,
  getDbPath,
  checkDbPath
};
