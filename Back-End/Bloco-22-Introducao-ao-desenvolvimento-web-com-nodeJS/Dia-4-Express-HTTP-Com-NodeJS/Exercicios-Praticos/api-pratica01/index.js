const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App rodando na porta: ${PORT}`);
})

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({message: 'pong'})
})