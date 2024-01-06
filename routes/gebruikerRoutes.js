const express = require('express');
const router = express.Router();
const gebruikerController = require('../controllers/gebruikerController');

router.post('/gebruikers', gebruikerController.createGebruiker);
router.get('/gebruikers', gebruikerController.getAllGebruikers);
router.get('/gebruikers/:id', gebruikerController.getGebruikerById);
router.put('/gebruikers/:id', gebruikerController.updateGebruikerById);
router.delete('/gebruikers/:id', gebruikerController.deleteGebruikerById);
router.get('/gebruikersWithLimitAndOffset', gebruikerController.getAllGebruikersWithLimitAndOffset);



module.exports = router;
