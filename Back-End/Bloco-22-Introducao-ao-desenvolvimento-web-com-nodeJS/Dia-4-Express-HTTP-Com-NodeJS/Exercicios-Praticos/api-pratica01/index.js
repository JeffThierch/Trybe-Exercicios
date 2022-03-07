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

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(201).json({message: `Hello, ${name}!`})
})

app.post('/greetings', (req, res) => {
  const { jsonInfo: { name, age } } = req.body;

  if(age <= 17) {
    return res.status(401).json({message: "Unauthotized"})
  }

  res.status(200).json({message: `Hello, ${name}!`})

})