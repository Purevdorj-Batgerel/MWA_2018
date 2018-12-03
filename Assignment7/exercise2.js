const express = require('express');
const dbConnection = require('./dbConnectionMiddleware');

const app = express();
const port = 3000;

app.use(dbConnection());
app.use('/secret', require('./routes/secret'));

app.listen(port, () => console.log(`Server listening port ${port}`));