import connection from "../models/connection";
import BookModel from "../models/book.model";
import Book from "../interfaces/book.interface";
import { NotFoundError } from 'restify-errors';

class BookServices {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll()

    return books;
  }

  public async create(book: Book): Promise<Book> {
    const newBook = await this.model.create(book);

    return newBook;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);

    return book
  }

  public async update(id: number, book: Book): Promise<Book> {
    const bookFound = await this.model.getById(id);

    if(!bookFound) {
      throw new NotFoundError('NotFoundError');
    }
    
    const newBook = await this.model.update(id, book);

    return newBook;
  }

  public async remove(id: number) {
    const bookFound = await this.model.getById(id);

    if(!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.remove(id);
  }
}

export default BookServices;