const express = require('express');
const patientController = require('../controllers/patientControllers')

const router = express.Router();

router
  .get('/', patientController.getAll)
  .post('/', patientController.create)

module.exports = router;