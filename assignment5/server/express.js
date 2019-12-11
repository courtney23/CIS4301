var path = require('path'),
    express = require('express'),
    sqlite3 = require('sqlite3').verbose(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    router = require('./routes.js');
    controller = require("./controller.js"),

module.exports.init = function() {
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
    controller.updatFlower(req, res);
}); 

//exports.deleteFlower from controller 
app.post("/api/deleteFlower", function (req, res) {
    controller.deleteFlower(req, res);
}); 

//exports.listFlowers from controller 
app.post("/api/listFlowers", function (req, res) {
    controller.listFlowers(req, res);
}); 

//exports.setCommonName from controller 
app.post("/api/setCommonName", function (req, res) {
    controller.setCommonName(req, res);
}); 