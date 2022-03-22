const express = require('express');
const userControllers = require('../controllers/userControllers.js') 

const router = express.Router();

app.post('/', userControllers.createUser);

module.exports = router