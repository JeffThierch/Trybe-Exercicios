import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection
  }

  public async getAll(): Promise<Book[]> {
    const query = 'SELECT * FROM books';
    const [books] = await this.connection.execute(query);

    return books as Book[]
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const query = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [title, price, author, isbn]);

    return { id: insertId, ...book };
  }

  public async getById(id: number): Promise<Book> {
    const query = 'SELECT * FROM books WHERE id = ?'

    const [rows] = await this.connection.execute(query, [id]);

    const [book] = rows as Book[]

    return book;
  }

  public async update(id: number, book: Book): Promise<Book> {
    const {title, price, author, isbn} = book

    const query = 'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?';

    await this.connection.execute(query, [title, price, author, isbn, id])

    return {id, ...book}
  }

  public async remove(id: number) {
    const query = 'DELETE FROM books WHERE id=?'
    
    await this.connection.execute(query, [id]);
  }
}