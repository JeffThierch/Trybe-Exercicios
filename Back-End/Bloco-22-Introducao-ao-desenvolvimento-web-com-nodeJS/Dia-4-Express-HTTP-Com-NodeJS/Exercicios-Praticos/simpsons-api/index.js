const fs = require('fs');
const app = require('express')();
const bodyParser = require('body-parser');
const crypto = require('crypto');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(bodyParser.json());

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex')
}

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  const fields = [email, password, firstName, phone]

  const isSomeFildInvalid = fields.some((field) => field === undefined || field.length === 0)

  if(isSomeFildInvalid) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = generateToken();

  res.status(200).json({ token })
})

app.get('/simpsons', (req, res) => {
  try {
    const token = req.headers.authorization

    if (token === undefined || token.length !== 16 ) {
      return res.status(401).json({message: 'Token invalido!'})
    }

    const simpsons = fs.readFileSync('./simpsons.json', 'utf8')

    return res.status(200).json(JSON.parse(simpsons))
  }
  catch (err) {
    return res.status(500).json({message: 'Ocorreu um erro tente novamente!'})
  }
})

app.post('/simpsons', (req, res) => {
  try {

    const { id, name } = req.body;

    const token = req.headers.authorization

    if (token === undefined || token.length !== 16 ) {
      return res.status(401).json({message: 'Token invalido!'})
    }

    const simpsons = fs.readFileSync('./simpsons.json', 'utf8');

    const parsedData = JSON.parse(simpsons)

    const simpsonExist = parsedData.some((simpson) => simpson.id === id)

    if(simpsonExist) {
      return res.status(409).json({message: 'id already exists'})
    }

    fs.writeFileSync('./simpsons.json', JSON.stringify([
      ...parsedData,
      {id, name}
    ]))

    res.status(204).end()
  }
  catch (err) {
    return res.status(500).json({message: 'Ocorreu um erro tente novamente!'})
  }
})

app.get('/simpsons/:id', (req, res) => {
  try {
    const { id } = req.params;

    const token = req.headers.authorization

    if (token === undefined || token.length !== 16 ) {
      return res.status(401).json({message: 'Token invalido!'})
    }
  
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

