const Gebruiker = require('../models/gebruikerModel');

const createGebruiker = (req, res) => {
    const newGebruiker = req.body;

    Gebruiker.create(newGebruiker, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error creating the gebruiker.',
            });
        } else {
            res.send(data);
        }
    });
};

const getAllGebruikers = (req, res) => {
    Gebruiker.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error getting gebruikers.',
            });
        } else {
            res.send(data);
        }
    });
};

const getGebruikerById = (req, res) => {
    const gebruikerId = req.params.id;

    Gebruiker.getById(gebruikerId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Gebruiker with id ${gebruikerId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error getting gebruiker with id ${gebruikerId}.`,
                });
            }
        } else {
            res.send(data);
        }
    });
};


const updateGebruikerById = (req, res) => {
    const gebruikerId = req.params.id;
    const gebruiker = req.body;

    Gebruiker.updateById(gebruikerId, gebruiker, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Gebruiker with id ${gebruikerId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error updating gebruiker with id ${gebruikerId}.`,
                });
            }
        } else {
            res.send(data);
        }
    });
};

const deleteGebruikerById = (req, res) => {
    const gebruikerId = req.params.id;

    Gebruiker.deleteById(gebruikerId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Gebruiker with id ${gebruikerId} not found.`,
                });
            } else {
                res.status(500).send({
                    message: `Error deleting gebruiker with id ${gebruikerId}.`,
                });
            }
        } else {
            res.send({ message: 'Gebruiker deleted successfully!' });
        }
    });
};

module.exports = {
    createGebruiker,
    getAllGebruikers,
    getGebruikerById,
    updateGebruikerById,
    deleteGebruikerById,
};
