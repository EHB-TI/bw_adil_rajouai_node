const db = require('../db');




const Gebruiker = {
    create: (newGebruiker, result) => {
        db.query('INSERT INTO gebruikers SET ?', newGebruiker, (err, res) => {
            if (err) {
                console.error('Error creating a gebruiker: ', err);
                result(err, null);
                return;
            }

            console.log('Created gebruiker: ', { id: res.insertId, ...newGebruiker});
            result(null, { id: res.insertId, ...newGebruiker });
        });
    },
    getAll: result => {
        db.query('SELECT * FROM gebruikers', (err, res) => {
            if (err) {
                console.error('Error getting gebruikers: ', err);
                result(err, null);
                return;
            }

            console.log('Gebruikers: ', res);
            result(null, res);
        });
    },
    getById: (gebruikerId, result) => {
        db.query('SELECT * FROM gebruikers WHERE id = ?', gebruikerId, (err, res) => {
            if (err) {
                console.error('Error getting gebruiker by id: ', err);
                result(err, null);
                return;
            }
    
            if (res.length) {
                console.log('Gebruiker: ', res[0]);
                result(null, res[0]);
                return;
            }
    
            result({ kind: 'not_found' }, null);
        });
    },
    
    updateById: (id, gebruiker, result) => {
        db.query('UPDATE gebruikers SET ? WHERE id = ?', [gebruiker, id], (err, res) => {
            
            if (err) {
                console.error('Error updating gebruiker: ', err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Updated gebruiker: ', { id, ...gebruiker });
            result(null, { id, ...gebruiker });
        });
    },
    deleteById: (id, result) => {
        db.query('DELETE FROM gebruikers WHERE id = ?', id, (err, res) => {
            if (err) {
                console.error('Error deleting gebruiker: ', err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Deleted gebruiker with id: ', id);
            result(null, res);
        });
    },
    getByField: (field, value, result) => {
        db.query(`SELECT * FROM gebruikers WHERE ${field} = ?`, value, (err, res) => {
            if (err) {
                console.error(`Error getting gebruiker by ${field}: `, err);
                result(err, null);
                return;
            }
    
            if (res.length) {
                console.log(`Gebruiker with ${field} ${value}: `, res[0]);
                result(null, res);
                return;
            }
    
            result({ kind: 'not_found' }, null);
        });
    },
    
    
    
    getAllWithLimitAndOffset: (limit, offset, result) => {
        db.query('SELECT * FROM gebruikers LIMIT ? OFFSET ?', [limit, offset], (err, res) => {
            if (err) {
                console.error('Error getting gebruikers with limit and offset: ', err);
                result(err, null);
                return;
            }

            console.log('Gebruikers with limit and offset: ', res);
            result(null, res);
        });
    },
};
    



module.exports = Gebruiker;
