import { Pool, ResultSetHeader } from "mysql2/promise"
import User from "../interfaces/User.interface";

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const query = 'SELECT * FROM Users';

    const [users] = await this.connection.execute(query);

    return users as User[]
  }

  public async getById(id: number): Promise<User> {
    const query = 'SELECT * FROM Users WHERE id=?';

    const [users] = await this.connection.execute(query, [id]);

    const [user] = users as User[];

    return user
  }

  public async create(user: User): Promise<User> {
    const {name, email, password} = user;

    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, email, password]);

    return { id: insertId, name, email, password };
  }

  public async update(id: number, user: User): Promise<User> {
    const { name, email, password } = user;

    const query = 'UPDATE Users SET name=?, email=?, password=? WHERE id=?';

    await this.connection.execute(query, [name, email, password, id]);

    return { id, name, email, password };
  }

  public async remove(id: number): Promise<void> {
    const query = 'DELETE FROM Users WHERE id=?';

    await this.connection.execute(query, [id]);
  }
}