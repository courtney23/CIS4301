var flowers = require('./controller'),
    express = require('express'),
    router = express.Router();

router.route('/flowers/:comname').get(flowers.displaySightings) //Query: show 10 most recent sightings from list of flowers
router.route('/flowers').put(flowers.updateFlower); //Update a flower
router.route('/sightings').post(flowers.insertSighting); //Insert a sighting
router.route('/flowers/:comname').delete(flowers.deleteFlower);
router.route('/flowers').get(flowers.listFlowers); 
router.param('comname', flowers.setCommonName);

module.exports = router;
