var DB = require('./db.js');

exports.create = function(req,res){
    var flowers = new DB(req.body);

    flowers.save(function(err){
        if(err){
            res.status(400).send(err);}
            else{
                res.json(flowers);
            }
        });
    };

exports.displaySightings = function(req, res) {
    var comname = req.comname;
  
    Database.all(`SELECT * FROM sightings
                 WHERE name = "${comname}"
                 ORDER BY sighted DESC
                 LIMIT 10;`,
    (err, row) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send(row);
      }
    });
  
  };
  
exports.updateFlower = function(req, res) {
    var comname = req.body.comname;
    var genus = req.body.genus;
    var species = req.body.species;
  
    Database.run(`UPDATE FLOWERS
                  SET GENUS = "${genus}", SPECIES = "${species}"
                  WHERE COMNAME = "${comname}";`, (err) => {
      if(err) {
        res.status(400).send(err);
      } else {
        console.log("success");
      }
    });
  };
  
  exports.deleteFlower = function(req, res) {
    var flowers = req.flowers;
  
    Database.findByIdAndRemove(flowers._id,  function(err, results) {
      if(err) throw err;
      res.send(results);
    });
  };

  exports.listFlowers = function(req, res) {

    Database.all(`SELECT * FROM FLOWERS`, (err, row) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(row);
      }
    });
  };

  exports.setCommonName = function(req, res, next, comname) {
    req.comname = comname;
    next()
};