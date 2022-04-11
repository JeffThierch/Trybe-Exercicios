const express = require('express');
const bookController = require('../controllers/bookController');

const app = express();

app.use(express.json());

app.get('/', bookController.getAll);

const bookRoutes = require('../routes/bookRoutes');
app.use('/book', bookRoutes);

module.exports = app