const express = require('express');
const bodyParser = require('body-parser')
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/authors', async (_req, res) => {
  const authorsData = await Author.getAll();

  res.status(200).json(authorsData)
})

app.get('/books', async (req, res) => {
  const { id } = req.query

  const booksData = await Book.getByAuthorId(id);

  if(!booksData) {
    return res.status(404).json({message: 'Not found! =('})
  }

  res.status(200).json(booksData)
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const bookData = await Book.getById(id);

  if(!bookData) {
    return res.status(404).json({message: 'Not found =('});
  }

  res.status(200).json(bookData)
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!(await Book.isValid(title, author_id))) {
    return res.status(400).json({message: 'Dados invalidos'})
  }

  await Book.create(title, author_id);

  res.status(201).json({message: 'Livro criado com sucesso!'})

})

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});