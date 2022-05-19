import { NextFunction, Request, Response } from "express";
import { IPlant } from "../../../interfaces/IPlant";
import { EditPlantUseCase } from "./EditPlantUseCase";

export class EditPlantController {
  constructor(private editPlantUseCase: EditPlantUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { breed, needsSun, origin, size, specialCare } = request.body as IPlant
      const { id } = request.params;

      const newPlant = await this.editPlantUseCase.execute(id, {breed, needsSun, origin, size, specialCare})

      return response.status(200).json(newPlant)
    } catch (error) {
      next(error)
    }
  }
}