const {Router} = require('express');
const router = Router();
const personController = require('../controllers/personsController');

 router.get('/', personController.allPerson);
 router.post('/create', personController.createPerson);
 router.put('/update/:id', personController.upgradePerson);
 router.put('/actuvehicles/:id', personController.upgradeHistorialPerson);
 router.delete('/delete/:id', personController.deletePerson);



module.exports = router;