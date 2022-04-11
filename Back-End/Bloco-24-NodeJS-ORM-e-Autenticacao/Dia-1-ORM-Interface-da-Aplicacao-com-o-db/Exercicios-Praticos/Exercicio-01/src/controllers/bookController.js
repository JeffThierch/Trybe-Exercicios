const bookServices = require('../services/bookServices')

const getAll = async (req, res, next) => {
  try {
    const {authorName} = req.query

    const allBooks = await bookServices.getAll(authorName);

    return res.status(200).json(allBooks);
    
  } catch (error) {
    return next(error);
  }
};

const create = async (req, res, next) => {
  try {

    const { title, author, pageQuantity } = req.body;

    const newBook = await bookServices.create({title, author, pageQuantity});

    return res.status(201).json(newBook);
    
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {

    const { id } = req.params;

    const book = await bookServices.getById(id);

    return res.status(200).json(book);
    
  } catch (error) {
    return next(error);
  }
};

const replaceById = async (req, res, next) => {
  try {

    const { id } = req.params;

    const { title, author, pageQuantity } = req.body;

    const newBook = await bookServices.replaceById({id, title, author, pageQuantity});

    return res.status(200).json(newBook);
    
  } catch (error) {
    return next(error);
  }
};



const deleteBook = async (req, res, next) => {
  try {

    const { id } = req.params;

    await bookServices.deleteBook(id);

    return res.status(200).json({message: `Book with id: ${id} deleted with sucess`});
    
  } catch (error) {
    return next(error);
  }
};


module.exports = {
  getAll,
  getById,
  create,
  replaceById,
  deleteBook,
}