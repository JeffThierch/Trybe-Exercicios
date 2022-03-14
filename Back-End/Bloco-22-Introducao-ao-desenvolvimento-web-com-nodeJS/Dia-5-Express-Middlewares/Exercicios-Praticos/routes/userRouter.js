const express = require ('express');
const { validateRegister, validateLogin } = require('../middlewaresValidator')
const {tokenGenerator} = require('../tokenGenerator')

const router = express.Router();

router.post('/register', validateRegister ,(_req, res) => {
  res.status(201).json({message: 'user created'})
})

router.post('/login', validateLogin, (_req, res) => {
  const token = tokenGenerator(16);

  res.status(200).json({token})
})

module.exports = router