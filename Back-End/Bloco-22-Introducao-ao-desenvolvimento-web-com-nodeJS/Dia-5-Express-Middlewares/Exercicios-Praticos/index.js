const express = require ('express');
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000

app.use(bodyParser.json());

const userRouter = require('./userRouter');

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
})