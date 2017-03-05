// Required libraries
const settings = require('electron-settings');

// Required files
const { getDbPathUserInput } = require('./userDialog');

// settings.clearSync(); // TODO: temporary to simulate new user

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
