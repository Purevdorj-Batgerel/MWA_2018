const express = require('express');
const dbConnectionMiddleware = require('../Assignment7/dbConnectionMiddleware');

const app = express();
const port = 3000;

app.use(express.json());
app.use(dbConnectionMiddleware());

app.use('/api/location', require('./routes/location'));

app.listen(port, () => console.log(`Server listening port ${port}`));