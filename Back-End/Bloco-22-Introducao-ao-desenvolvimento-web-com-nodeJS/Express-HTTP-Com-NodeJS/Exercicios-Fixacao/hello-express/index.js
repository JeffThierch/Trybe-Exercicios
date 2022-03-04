const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello Word')
})

app.listen(3001, () => {
  console.log('Aplicacao ouvindo na porta 3001')
})