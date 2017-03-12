// Required libraries
const low = require('lowdb');
const storage = require('lowdb/lib/storages/file-sync');
const path = require('path');

// Required files
const { getDbPath } = require('./userSettings');

const dbConnect = () => {
  // Get the path to the database
  const dbPath = getDbPath();

  // Grab the db at the user settings path
  const db = low(path.join(dbPath, 'memoriaeDB.json'), { storage });

  // If it's a fresh database, then write default values
  db.defaults({ pages: [
	  {
		id: 0,
		title: 'My first page.',
		text: 'Type your text here',
		tags: []
	  }
  ] })
  .write();

  return db;
};

module.exports = {
  dbConnect
};
