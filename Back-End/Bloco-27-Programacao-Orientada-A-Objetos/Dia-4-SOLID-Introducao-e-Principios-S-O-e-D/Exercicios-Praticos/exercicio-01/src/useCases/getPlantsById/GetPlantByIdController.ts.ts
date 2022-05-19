import { NextFunction, Request, Response } from "express";
import { GetPlantsByIdUseCase } from "./GetPlantByIdUseCase";

export class GetPlantsByIdController {
  constructor(private getPlantsByIdUseCase: GetPlantsByIdUseCase) {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      const plant = await this.getPlantsByIdUseCase.execute(id)

      return response.status(200).json(plant)
    } catch (error) {
      next(error)
    }
  }
}