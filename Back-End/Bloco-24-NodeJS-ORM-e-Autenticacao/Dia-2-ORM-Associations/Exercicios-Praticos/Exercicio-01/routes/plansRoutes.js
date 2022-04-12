const express = require('express');
const planControllers = require('../controllers/planControllers')

const router = express.Router();

router
  .get('/:id', planControllers.getById)

module.exports = router;