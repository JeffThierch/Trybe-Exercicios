import connection from "../models/connection";
import BookModel from "../models/book.mode";
import Book from "../interfaces/book.interface";

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
}

export default BookServices;