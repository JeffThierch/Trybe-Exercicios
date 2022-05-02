import connection from "../models/connection";
import UserModel from "../models/Users.model";
import User from "../interfaces/User.interface";

export default class UserServices {
  public model: UserModel
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();

    return users
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);

    return user;
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);

    return newUser
  }

  public async remove(id: number): Promise<void> {
    await this.model.remove(id);
  }

  public async update(id: number, user: User): Promise<User> {
    const newUser = await this.model.update(id, user);

    return newUser;
  }

};