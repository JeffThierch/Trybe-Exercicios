const router = require('express').Router();
const topSecretController = require('../controllers/topSecretController');
const authJwt = require('../middlewares/authJwt');
const validateAdmin = require('../middlewares/admin');

router
  .get('/', authJwt, validateAdmin, topSecretController.getSecret);

module.exports = router;