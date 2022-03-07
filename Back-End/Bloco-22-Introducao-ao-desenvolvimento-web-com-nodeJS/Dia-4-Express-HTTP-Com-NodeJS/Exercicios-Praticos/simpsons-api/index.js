const fs = require('fs');
const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(bodyParser.json());

app.get('/simpsons', (_req, res) => {
  try {
    const simpsons = fs.readFileSync('./simpsons.json', 'utf8')

    return res.status(200).json(JSON.parse(simpsons))
  }
  catch (err) {
    return res.status(500).json({message: 'Ocorreu um erro tente novamente!'})
  }
})

app.get('/simpsons/:id', (req, res) => {
  try {
    const { id } = req.params;
  
    const simpsons = fs.readFileSync('./simpsons.json', 'utf8');
  
    const simpsonInfo = JSON.parse(simpsons).filter((simpson) => simpson.id === id)
  
    if(!simpsonInfo) {
      return res.status(404).json({message: 'Simpson not found!'})
    }
  
    return res.status(200).json(simpsonInfo)

  } catch (err) {
    return res.status(500).json({message: 'Ocorreu um erro tente novamente!'})
  }
})

