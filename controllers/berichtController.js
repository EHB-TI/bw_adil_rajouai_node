const Bericht = require('../models/berichtModel');

const createBericht = (req, res) => {
    const newBericht = req.body;

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
