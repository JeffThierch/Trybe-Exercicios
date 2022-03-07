const fs = require('fs');
const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(bodyParser.json());

app.get('/simpsons', (req, res) => {
  try {
    const simpsons = fs.readFileSync('./simpsons.json', 'utf8')

    return res.status(200).json(JSON.parse(simpsons))
  }
  catch (err) {
    return res.status(500).json({message: 'Ocorreu um erro tente novamente!'})
  }
})

