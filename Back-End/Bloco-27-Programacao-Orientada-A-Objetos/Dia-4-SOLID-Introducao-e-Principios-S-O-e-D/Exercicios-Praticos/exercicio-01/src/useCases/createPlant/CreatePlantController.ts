import { NextFunction, Request, Response } from "express";
import { IPlant } from "../../../interfaces/IPlant";
import { CreatePlantUseCase } from "./CreatePlantUseCase";

export class CreatePlantController {
  constructor(private createPlantUseCase: CreatePlantUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { breed, needsSun, origin, size, specialCare } = request.body as IPlant

      const newPlant = await this.createPlantUseCase.execute({breed, needsSun, origin, size, specialCare})

      return response.status(201).json(newPlant)
    } catch (error) {
      next(error)
    }
  }
}