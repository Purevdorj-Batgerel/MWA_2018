const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/grades', require('./routes/grades'));

app.listen(3000, () => console.log("server listening port 3000"));