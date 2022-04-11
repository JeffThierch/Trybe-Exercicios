const express = require('express');
const bookController = require('../controllers/bookController');

const app = express();

app.use(express.json());

app.get('/books', bookController.getAll);

const bookRoutes = require('../routes/bookRoutes');
app.use('/book', bookRoutes);

const errorController = require('../controllers/errorController');
app.use(errorController);

module.exports = app