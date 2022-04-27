import { Pool } from 'mysql2/promise';

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const [rows] = await this.connection.execute('SELECT * FROM Books');
    return rows;
  }
}