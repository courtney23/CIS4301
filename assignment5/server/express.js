var path = require('path'),
    express = require('express'),
    sqlite3 = require('sqlite3').verbose(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    router = require('./routes.js');
// controller = require("./controller"),

module.exports.init = function () {
    var app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(express.static('client'));
    app.use('/api', router);
    app.all('*', function (req, res) {
        res.redirect('/');
    });
    return app;
};

//exports.create from controller
app.post("/api/createDB", function (req, res) {
    controller.create(req, res);
});

//exports.displaySightings from controller
app.get("/api/displaySightings", function (req, res) {
    controller.displaySightings(req, res);
});

//exports.updateFlower from controller 
app.post("/api/updateFlower", function (req, res) {
    controller.updateFlower(req, res);
});

//exports.deleteFlower from controller 
app.post("/api/deleteFlower", function (req, res) {
    controller.deleteFlower(req, res);
});

//exports.listFlowers from controller 
// app.post("/api/listFlowers", function (req, res) {
//     controller.listFlowers(req, res);
// }); 
app.get("/api/listFlowers", function (req, res) {
    // const db = new sqlite3.Database('./server/flowers2019.db')
    var database = new sqlite3.Database(db, err => {
        if (err) {
          return console.error("Error connecting to the database");
        }
        console.log('Connected to the database.');
      });
      
    db.all(`SELECT * FROM FLOWERS`, (err, row) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send({ flowers: rows });
        }
    });
    db.close();
    // console.log(res);
});

//exports.setCommonName from controller 
app.post("/api/setCommonName", function (req, res) {
    controller.setCommonName(req, res);
}); 