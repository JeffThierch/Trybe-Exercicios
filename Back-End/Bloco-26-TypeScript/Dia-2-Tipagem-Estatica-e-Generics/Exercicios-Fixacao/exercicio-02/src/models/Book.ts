import { Pool, ResultSetHeader } from 'mysql2/promise';

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string
}

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Books');
    return rows as Book[];
  }

  public async create({title, price, author, isbn}: Book): Promise<Book> {
    const [{insertId}] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?);', 
      [title, price, author, isbn]
    );

    return {id: insertId, title, price, author, isbn};
  }
}