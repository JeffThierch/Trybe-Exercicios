import connection from "../models/connection";
import UserModel from "../models/Users.model";
import User from "../interfaces/User.interface";
import { NotFoundError, ConflictError } from 'restify-errors'

class UserServices {
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

    if(!user) {
      throw new NotFoundError('User not found')
    }

    return user;
  }

  public async create(user: User): Promise<User> {

    const userExist = await this.model.getByEmail(user.email)

    if(userExist) {
      throw new ConflictError('User already exist')
    }

    const newUser = await this.model.create(user);

    return newUser
  }

  public async remove(id: number): Promise<void> {
    const userExist = await this.model.getById(id);

    if(!userExist) {
      throw new NotFoundError('User not found')
    }

    await this.model.remove(id);
  }

  public async update(id: number, user: User): Promise<User> {
    const userExist = await this.model.getById(id);

    if(!userExist) {
      throw new NotFoundError('User not found')
    }

    const newUser = await this.model.update(id, user);

    return newUser;
  }
};

export default UserServices;