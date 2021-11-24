let express = require('express');
let router = express.Router();
let historyController = require('../controllers/historyController');

router.get('/:idVehicle', historyController.getHistory);

module.exports = router;
