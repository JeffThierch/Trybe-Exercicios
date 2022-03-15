const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
})

const getAll = async () => {
  const query = 'SELECT * FROM model_example.books';

  const [booksData] = await connection.execute(query);

  return booksData.map(serialize)
}

const getByAuthorId = async(id) => {

  const query = 'SELECT * FROM model_example.books WHERE author_id = ?;';

  const [booksData] = await connection.execute(query, [id]);

  return booksData.map(serialize);
}

module.exports = {
  getAll,
  getByAuthorId
}