const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/events', require('./routes/events'));
app.use(express.static('public'));

module.exports = app;
