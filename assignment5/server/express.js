var path = require('path'),
    express = require('express'),
    sqlite3 = require('sqlite3').verbose(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    router = require('./routes.js');

module.exports.init = function() {
  var App = express();
  App.use(morgan('dev'));
  App.use(bodyParser.json());
  App.use(express.static('client'));
  App.use('/api', router);
  App.all('*', function (req, res) {
    res.redirect('/');
  });
  return App;
};