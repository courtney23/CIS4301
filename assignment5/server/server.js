var express = require('./express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const sqlite3 = require('sqlite3').verbose();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());

// var port = process.env.PORT || 8080;

// module.exports.start = function() {
//   var app = express.init();
//   app.listen(port, function() {
//     console.log('App listening on port ' + port);
//   });
// };