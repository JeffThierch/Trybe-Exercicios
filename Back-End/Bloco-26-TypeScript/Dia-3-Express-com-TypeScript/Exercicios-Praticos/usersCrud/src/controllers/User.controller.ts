import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserServices from "../services/User.services";
import 'express-async-errors';

export default class UserController {
  private userService: UserServices

  constructor() {
    this.userService = new UserServices();
  }

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();

    return res.status(StatusCodes.OK).json(users);
  }

  public  getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    const user = await this.userService.getById(intID);

    return res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const newUser = await this.userService.create({name, email, password});

    return res.status(StatusCodes.CREATED).json(newUser);
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    await this.userService.remove(intID);

    return res.status(StatusCodes.OK).json({message: `User with id: ${intID}, deleted with sucess.`});
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const intID = parseInt(id, 10);

    const newUser = await this.userService.update(intID, {name, email, password});

    return res.status(StatusCodes.OK).json(newUser);
  }
}