const express = require('express');
const router = express.Router();
const berichtController = require('../controllers/berichtController');

router.post('/berichten', berichtController.createBericht);
router.get('/berichten', berichtController.getAllBerichten);
router.get('/berichten/:id', berichtController.getBerichtById);
router.put('/berichten/:id', berichtController.updateBerichtById);
router.delete('/berichten/:id', berichtController.deleteBerichtById);

module.exports = router;



