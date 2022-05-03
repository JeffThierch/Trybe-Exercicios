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

    return res.status(StatusCodes.CREATED).json(newBook);
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params

    const intID = parseInt(id, 10);

    const book = await this.bookService.getById(intID);

   return res.status(StatusCodes.OK).json(book);
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;

    const {title, price, author, isbn} = req.body

    const intID = parseInt(id, 10);

    const newBook = await this.bookService.update(intID, {title, price, author, isbn});

    return res.status(StatusCodes.OK).json(newBook)
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const intID = parseInt(id, 10);

    await this.bookService.remove(intID);

    return res.status(StatusCodes.OK).json({ message: 'Book deleted successfully' });
  }
}

export default BooksController