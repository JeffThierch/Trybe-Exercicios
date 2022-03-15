const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors', async (req, res) => {
  const authorsData = await Author.getAll();

  res.status(200).json(authorsData)
})

app.get('/books', async (req, res) => {
  const booksData = await Book.getAll();

  res.status(200).json(booksData)
})

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});