const express = require('express');
const surgerieControllers = require('../controllers/surgerieControllers')

const router = express.Router();

router
  .get('/:name', surgerieControllers.getByName)

module.exports = router;