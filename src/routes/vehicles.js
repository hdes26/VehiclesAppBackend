const {Router} = require('express');
const router = Router();
const personController = require('../controllers/vehiclesController');

 router.get('/', personController.allVehicles);
 router.post('/create', personController.createVehicle);
 router.put('/update/:id', personController.upgradoVehicle);
 router.put('/actuperson/:id' , personController.upgradeHistorialVehicle);
 router.delete('/delete/:id', personController.deleteVehicle);




module.exports = router;