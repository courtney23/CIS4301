var flowers = require('./controller'),
    express = require('express'),
    router = express.Router();

//Three required tasks
router.route('/flowers').get(flowers.listFlowers); //Query: show 10 most recent sightings from list of flowers
router.route('/flowers').put(flowers.updateFlower); //Update a flower
router.route('/sightings').post(flowers.insertSighting); //Insert a sighting

module.exports = router;