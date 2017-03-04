// Required libraries
const remote = require('electron').remote;
const dialog = remote.dialog;
const { settings } = require('./userSettings');

const getDbPath = () => {
  let resultArr = dialog.showOpenDialog({
    properties: ['openDirectory']
  });
  return resultArr[0];
};

module.exports = {
  getDbPath
};
