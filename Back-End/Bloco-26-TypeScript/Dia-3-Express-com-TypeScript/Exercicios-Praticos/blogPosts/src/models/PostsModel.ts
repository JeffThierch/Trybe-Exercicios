import { Pool, ResultSetHeader } from "mysql2/promise";

import IPost from "../interfaces/IPost";
import IEditPost from "../interfaces/IEditPost";
import IQueryParams from "../interfaces/IQueryParams";

export default class PostsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IPost[]> {
    const query = 'SELECT * FROM Posts'
    const [posts] = await this.connection.execute(query)

    return posts as IPost[]
  }

  async getById(id: number): Promise<IPost> {
    const query = 'SELECT * FROM Posts WHERE id=?';

    const [posts] = await this.connection.execute(query, [id]);

    const [post] = posts as IPost[]

    return post;
  }
  
  async create(post: IPost): Promise<IPost> {
    const {title, author, category, publicationDate} = post
    const query = 'INSERT INTO Posts (title, author, category, publicationDate ) VALUES (?, ?, ?, ?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [title, author, category, publicationDate]);

    return {id: insertId, title, author, category, publicationDate}
  }

  async update(post: IEditPost): Promise<IEditPost> {
    const { id, author, category, publicationDate, title } = post;
    const query = 'UPDATE Posts SET title=?, author=?, category=?, publicationDate=? WHERE id=?';

    await this.connection.execute(query, [title, author, category, publicationDate, id]);

    return { id, title, author, category, publicationDate };
  }

  async remove(id: number): Promise<void> {
    const query = 'DELETE FROM Posts WHERE id=?'

    await this.connection.execute(query, [id]);
  }

  async searchByQueryParams(params: IQueryParams): Promise<IPost[]> {
    const {author, category, date} = params

    let query = 'SELECT * FROM Posts WHERE author=? OR category=? OR publicationDate=?';

    if(!date) {
      query = 'SELECT * FROM Posts WHERE author=? OR category=?';

      const [posts] = await this.connection.execute(query, [author, category]);
      
      return posts as IPost[];
    }


    const [posts] = await this.connection.execute(query, [author, category, date]);

    return posts as IPost[];
  }
}