const { Book } = require('../models')
const { Op } = require("sequelize");    
const { validateBookFields } = require('./validations/bookValidations')

const getAll = async (authorName) => {
  if (authorName) {
    const allBooksByAuthor = await Book.findAll({
      where: {
        author: {
          [Op.like]: `%${authorName}%`
        }
      },
      order: [
        ['title', 'ASC'],
        ['created_at', 'ASC'],
    ],
  })

    return allBooksByAuthor
  }
  const allBooks = await Book.findAll({
    order: [
      ['title', 'ASC'],
      ['created_at', 'ASC'],
  ],
  });

  return allBooks;
};

const create = async ({ title, author, pageQuantity }) => {
  validateBookFields({ title, author });

  const newBook = await Book.create({title, author, pageQuantity});

  return newBook;
};

const getById = async (id) => {
  const book = await Book.findOne({where: {id}});

  return book;
};

const replaceById = async ({id, title, author, pageQuantity}) => {

  const bookExist = await Book.findOne({where: {id}});

  validateBookFields({ title, author });

  if(!bookExist) {
    throw new Error('BOOK_NOT_FOUND')
  }

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