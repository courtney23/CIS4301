const sqlite3 = require('sqlite3').verbose();

const path = require('path')
const dbPath = path.resolve(__dirname, 'flowers2019.db')
// const db = new sqlite3.Database(dbPath)

let db = new sqlite3.Database(dbPath, (err) => {
// let db = new sqlite3.Database('/flowers2019.db', (err) => {
    if (err){
        console.error(err.message);
    }
    console.log('Connected to the flower database');
});

db.serialize(() => {
    db.each(`SELECT Genus as genus, Species as species,
            ComName as name
             FROM flowers`, (err,row) => {
                 if (err){
                     console.error(err.message);
                 }
                 console.log(row);
             });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});