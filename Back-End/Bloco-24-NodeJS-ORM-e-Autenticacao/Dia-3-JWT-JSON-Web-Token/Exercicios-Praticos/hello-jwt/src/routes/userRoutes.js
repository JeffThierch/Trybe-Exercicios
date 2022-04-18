const router = require('express').Router();
const userController = require('../controllers/userController');
const authJwt = require('../middlewares/authJwt');

router
  .get('/me', authJwt, userController.getInfo);

module.exports = router;