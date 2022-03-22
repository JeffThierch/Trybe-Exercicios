const express = require('express');
const pingControllers = require('../controllers/pingControllers')

const router = express.Router();

router.get('/', pingControllers.getPing);

module.exports = router;