// Required libraries
const remote = require('electron').remote;
const dialog = remote.dialog;

// Required files
const { settings } = require('./userSettings');

const getDbPathUserInput = () => {
  let resultArr = dialog.showOpenDialog({
    properties: ['openDirectory']
  });
  return resultArr[0];
};

module.exports = {
  getDbPathUserInput
};
