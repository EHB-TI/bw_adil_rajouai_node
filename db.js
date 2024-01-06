const mysql = require('mysql2');
const app = require('./index');  // Importeer de Express-app


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'bw_adil_rajouai_node2',
    port: 8889,
});


module.exports = connection;