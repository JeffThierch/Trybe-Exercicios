const express = require('express');
const cepControllers = require('../controllers/cepControllers');

const router = express.Router();

router.get('/:cep', cepControllers.getByCep);

module.exports = router;