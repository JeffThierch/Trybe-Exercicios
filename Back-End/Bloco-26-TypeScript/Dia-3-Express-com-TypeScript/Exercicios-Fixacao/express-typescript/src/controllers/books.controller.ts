import {Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';
import BookServices from '../services/books.services';

class BooksController {
  constructor(private bookService = new BookServices()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();

    res.status(StatusCodes.OK).json(books);
  }

  public create = async (req: Request, res: Response) => {
    const { title, author, price, isbn } = req.body

    const newBook = await this.bookService.create({title, author, price, isbn});

    res.status(StatusCodes.CREATED).json(newBook);
  }
}

export default BooksController