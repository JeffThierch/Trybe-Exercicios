import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validateBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController()

router
  .get('/books', booksController.getAll)
  .post('/books', validateBook, booksController.create)
  .get('/books/:id', booksController.getById)
  .put('/books/:id', validateBook, booksController.update)
  .delete('books/:id', booksController.remove);

export default router;