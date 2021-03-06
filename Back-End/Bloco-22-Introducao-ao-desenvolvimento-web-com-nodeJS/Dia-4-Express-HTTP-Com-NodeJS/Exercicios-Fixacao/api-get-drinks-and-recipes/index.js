const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.listen(3001, () => {
  console.log('App rodando na porta 3001');
});

app.use(cors(), bodyParser.json());

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

app.get('/recipes/search', (req, res) => {
  const {name, maxPrice} = req.query;

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.name.includes(name) && recipe.price <= maxPrice
  )

  res.status(200).json(filteredRecipes);
})

app.post('/recipes', (req, res) => {
  const {id, name, price, waitTime} = req.body;
  
  recipes.push({id, name, price, waitTime})

  res.status(201).json({message: 'Recipe create successfully'})

})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))

  if(!recipe) {
    return res.status(404).json({message: 'Recipe not found!'})
  }

  res.status(200).json(recipe)
})

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params

  const indexOfRecipe = recipes.findIndex((r) => r.id === parseInt(id))

  if(indexOfRecipe === -1 ) {
    return res.status(404).json({message: 'Recipe not found!'})
  }

  recipes[indexOfRecipe] = {...recipes[indexOfRecipe], ...req.body}

  res.status(204).end();

})

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params

  const indexOfRecipe = recipes.findIndex((r) => r.id === parseInt(id))

  if(indexOfRecipe === -1 ) {
    return res.status(404).json({message: 'Recipe not found!'})
  }

  recipes.splice(indexOfRecipe, 1)

  res.status(204).end()

})

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort(sortByNameValue))
});

app.get('/drinks/search', (req, res) => {
  const {name, maxPrice} = req.query;

  const filteredDrinks = drinks.filter(
    (drink) => drink.name.includes(name) && drink.price <= maxPrice
  )
  
  res.status(200).json(filteredDrinks)
})

app.post('/drinks', (req, res) => {
  const {id, name, price} = req.body;
  
  drinks.push({id, name, price})

  res.status(201).json({message: 'Drink create successfully'})

})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drink = drinks.find((drink) => drink.id === parseInt(id))

  if(!drink) {
    return res.status(404).json({message: 'drink not found!'})
  }

  res.status(200).json(drink)
})

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params

  const indexOfDrink = drinks.findIndex((d) => d.id === parseInt(id))

  if(indexOfDrink === -1 ) {
    return res.status(404).json({message: 'Drink not found!'})
  }

  drinks[indexOfDrink] = {...drinks[indexOfDrink], ...req.body}

  res.status(204).end();

})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params

  const indexOfDrink = drinks.findIndex((d) => d.id === parseInt(id))

  if(indexOfDrink === -1 ) {
    return res.status(404).json({message: 'Drink not found!'})
  }

  drinks.splice(indexOfDrink, 1)

  res.status(204).end()

})

app.get('/tokenValidation', (req, res) => {
  const token = req.headers.authorization;

  if(token.length !== 16) {
    return res.status(401).json({message: 'Invalid token!'})
  }

  res.status(200).json({message: 'Valid token!'})
})

app.all('*', (req, res) => {
  return res.status(404).json({message: `A rota ${req.path}, nao existe!`})
})