import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserServices from "../services/User.services";

export default class UserController {
  private userServices: UserServices

  constructor() {
    this.userServices = new UserServices();
  }

  public async getAll(req: Request, res: Response) {
    const users = await this.userServices.getAll();

    return res.status(StatusCodes.OK).json(users);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    const user = await this.userServices.getById(intID);

    return res.status(StatusCodes.OK).json(user);
  }

  public async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const newUser = await this.userServices.create({name, email, password});

    return res.status(StatusCodes.CREATED).json(newUser);
  }

  public async remove(req: Request, res: Response) {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    await this.userServices.remove(intID);

    return res.status(StatusCodes.OK).json({message: `User with id: ${intID}, deleted with sucess.`});
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const intID = parseInt(id, 10);

    const newUser = await this.userServices.update(intID, {name, email, password});

    return res.status(StatusCodes.OK).json(newUser);
  }
}