const { Book } = require('../models')

const getAll = async () => {
  const allBooks = await Book.findAll();

  return allBooks;
};

const create = async ({title, author, pageQuantity}) => {
  const newBook = await Book.create({title, author, pageQuantity});

  return newBook;
};

const getById = async (id) => {
  const book = await Book.findOne({where: {id}});

  return book;
};

const replaceById = async ({id, title, author, pageQuantity}) => {

  const [bookId] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );

  return { id: bookId, title, author, pageQuantity };
  
};

const deleteBook = async (id) => {
  await Book.destroy({ where: { id } });
};

module.exports = {
  getAll,
  create,
  getById,
  replaceById,
  deleteBook
}