const express = require ('express');
const {validateRegister} = require('./middlewaresValidator')

const router = express.Router();

router.post('/register', validateRegister ,(_req, res) => {
  res.status(201).json({message: 'user created'})
})

module.exports = router