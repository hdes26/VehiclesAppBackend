const { Router } = require('express');
const router = Router();
const personController = require('../controllers/vehiclesController');

router.get('/', personController.allVehicles);
router.post('/create', personController.createVehicle);
router.put('/update/:id', personController.upgradoVehicle);
router.delete('/delete/:id', personController.deleteVehicle);
router.get('/available/', personController.availableVehicle);
router.post('/assign/', personController.assignVehicle);
router.post('/desvincular/', personController.desvincularVehicle);





module.exports = router;