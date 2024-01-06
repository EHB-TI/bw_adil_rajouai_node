const Bericht = require('../models/berichtModel');

const createBericht = (req, res) => {
    const newBericht = req.body;

    // Controleer op lege velden
    const requiredFields = ['inhoud', 'gebruiker_id','titel', 'afzender', 'ontvanger', 'telefoonnummer'];
    if (requiredFields.some(field => newBericht[field] == null || newBericht[field] === '')) {
        return res.status(400).send({ message: 'Vul alle vereiste velden in: inhoud, afzender, ontvanger, telefoonnummer.' });
    }

    newBericht.telefoonnummer = parseInt(newBericht.telefoonnummer, 10);

    if (isNaN(newBericht.telefoonnummer) ) {
        return res.status(400).send({
            message: ' telefoonnummer moet geldige getallen zijn.',
        });
    }

    if (/\d/.test(newBericht.afzender)) {
        return res.status(400).send({
            message: 'Afzender mag geen cijfers bevatten.',
        });
    }


    Bericht.create(newBericht, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error creating the bericht.',
            });
        } else {
            res.send(data);
        }
    });
};

const getAllBerichten = (req, res) => {
    Bericht.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error getting berichten.',
            });
        } else {
            res.send(data);
        }
    });
};

const getBerichtById = (req, res) => {
    const berichtId = req.params.id;

    Bericht.getById(berichtId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Bericht with id ${berichtId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error getting bericht with id ${berichtId}.`,
                });
            }
        } else {
            res.send(data);
        }
    });
};

const updateBerichtById = (req, res) => {
    const berichtId = req.params.id;
    const bericht = req.body;

    Bericht.updateById(berichtId, bericht, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Bericht with id ${berichtId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error updating bericht with id ${berichtId}.`,
                });
            }
        } else {
            res.send(data);
        }
    });
};

const deleteBerichtById = (req, res) => {
    const berichtId = req.params.id;

    Bericht.deleteById(berichtId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Bericht with id ${berichtId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error deleting bericht with id ${berichtId}.`,
                });
            }
        } else {
            res.send({ message: 'Bericht deleted successfully!' });
        }
    });
};

module.exports = {
    createBericht,
    getAllBerichten,
    getBerichtById,
    updateBerichtById,
    deleteBerichtById,
};
