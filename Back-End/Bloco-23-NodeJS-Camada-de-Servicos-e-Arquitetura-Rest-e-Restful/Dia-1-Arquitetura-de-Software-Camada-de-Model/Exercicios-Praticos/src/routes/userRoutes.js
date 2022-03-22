const express = require('express');
const userControllers = require('../controllers/userControllers.js') 

const router = express.Router();

app.get('/', userControllers.getAll);
app.post('/', userControllers.createUser);
app.get('/:id', userControllers.getById)

module.exports = router