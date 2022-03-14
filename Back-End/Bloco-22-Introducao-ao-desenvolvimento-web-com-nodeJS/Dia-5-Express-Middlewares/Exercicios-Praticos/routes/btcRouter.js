const express = require ('express');
const router = express.Router();
const rescue = require('express-rescue')
const axios = require('axios').default;
const { validateToken } = require('../middlewaresValidator');

router.get('/price', validateToken, rescue(async (_req, res) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  res.status(200).json(response.data)
}))

module.exports = router