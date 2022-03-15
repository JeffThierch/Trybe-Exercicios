const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
})

const getAll = async () => {
  const query = 'SELECT id, title, author_id FROM model_example.books';

  const [booksData] = await connection.execute(query);

  return booksData.map(serialize)
}

module.exports = {
  getAll,
}