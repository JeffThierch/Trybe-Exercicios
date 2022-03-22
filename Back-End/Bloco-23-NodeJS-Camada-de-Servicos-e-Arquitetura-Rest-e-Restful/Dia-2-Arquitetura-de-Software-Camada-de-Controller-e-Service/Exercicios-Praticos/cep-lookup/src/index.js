const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


const pingRoutes = require('./routes/pingRoutes')
app.use('/ping', pingRoutes)


const cepRoutes = require('./routes/cepRoutes')
app.use('/cep', cepRoutes)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})