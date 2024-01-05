const mysql = require('mysql2');
const app = require('./index');  // Importeer de Express-app


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'bw_adil_rajouai_node2',
    port: 8889,
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');

    // Start de Express-app nadat de databaseverbinding is opgezet
    const app = require('./index');  // Het is beter om de app rechtstreeks vanuit index.js te importeren om cirkelafhankelijkheden te voorkomen
    const port = 3001;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

module.exports = connection;