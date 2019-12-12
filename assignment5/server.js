//SERVER
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const port = 5000; 
var cors = require('cors')

//DB STUFF
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

app.get('/api/flowers', (req,res) =>{
    var flowers = [];
    db.serialize(() => {
        db.each(`SELECT Genus as genus, Species as species,
                ComName as name
                 FROM flowers`, (err,row) => {
                     if (err){
                         console.error(err.message);
                     }
                    flowers.push("pls");
                     console.log(row);
                 });
    });
    res.send(flowers);
    // db.close((err) => {
    //   if (err) {
    //     console.error(err.message);
    //   }
    //   console.log('Close the database connection.');
    // });
});

//STARTING SERVER
app.listen(port, () => console.log(`Listening on port ${port}`)); 
app.use(bodyParser.json());
app.use(cors())