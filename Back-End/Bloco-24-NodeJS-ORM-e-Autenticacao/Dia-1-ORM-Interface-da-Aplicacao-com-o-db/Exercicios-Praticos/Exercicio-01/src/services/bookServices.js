const { Book } = require('../models/')

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

  const newBook = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );

  return newBook;
  
};

const deleteBook = async (id) => {
  await Book.delete({ where: { id } });
};

module.exports = {
  getAll,
  create,
  getById,
  replaceById,
  deleteBook
}