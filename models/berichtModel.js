const db = require('../db');

const Bericht = {
    create: (newBericht, result) => {
        db.query('INSERT INTO berichten SET ?', newBericht, (err, res) => {
            if (err) {
                console.error('Error creating a bericht: ', err);
                result(err, null);
                return;
            }

            console.log('Created bericht: ', { id: res.insertId, ...newBericht });
            result(null, { id: res.insertId, ...newBericht });
        });
    },
    getAll: result => {
        db.query('SELECT * FROM berichten', (err, res) => {
            if (err) {
                console.error('Error getting berichten: ', err);
                result(err, null);
                return;
            }

            console.log('Berichten: ', res);
            result(null, res);
        });
    },
    getById: (berichtId, result) => {
        db.query('SELECT * FROM berichten WHERE id = ?', berichtId, (err, res) => {
            if (err) {
                console.error('Error getting bericht by id: ', err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log('Berichten: ', res[0]);
                result(null, res[0]);
                return;
            }

            // Not found
            result({ kind: 'not_found' }, null);
        });
    },
    updateById: (id, bericht, result) => {
        db.query('UPDATE berichten SET ? WHERE id = ?', [bericht, id], (err, res) => {
            if (err) {
                console.error('Error updating bericht: ', err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // Not found
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Updated bericht: ', { id, ...bericht });
            result(null, { id, ...bericht });
        });
    },
    deleteById: (id, result) => {
        db.query('DELETE FROM berichten WHERE id = ?', id, (err, res) => {
            if (err) {
                console.error('Error deleting bericht: ', err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // Not found
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Deleted bericht with id: ', id);
            result(null, res);
        });
    },
};

module.exports = Bericht;
