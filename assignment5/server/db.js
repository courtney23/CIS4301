var sqlite3 = require('sqlite3').verbose();
var db = './server/flowers2019.db'
var database = new sqlite3.Database(db, err => {
  if (err) {
    return console.error("Error connecting to the database");
  }
  console.log('Connected to the database.');
});
module.exports = database;