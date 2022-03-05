const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');

const app = express();

app.listen(3001, () => {
  console.log('App rodando na porta 3001');
});

app.use(cors());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
]

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
]

const sortByNameValue = (a, b) => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

app.get('/recipes', (_req, res) => {
  res.json(recipes.sort(sortByNameValue))
})

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort(sortByNameValue))
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))

  if(!recipe) {
    return res.status(404).json({message: 'recipe not found!'})
  }

  res.status(200).json(recipe)
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drink = drinks.find((drink) => drink.id === parseInt(id))

  if(!drink) {
    return res.status(404).json({message: 'drink not found!'})
  }

  res.status(200).json(drink)
})