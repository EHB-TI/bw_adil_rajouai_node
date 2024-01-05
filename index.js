const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const berichtRoutes = require('./routes/berichtRoutes');
const gebruikerRoutes = require('./routes/gebruikerRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', berichtRoutes); 
app.use('/api', gebruikerRoutes); 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;  // Exporteer de Express-app
