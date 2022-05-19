import { NextFunction, Request, Response } from "express";
import { RemovePlantByIdUseCase } from "./RemovePlantByIdUseCase";

export class RemovePlantByIdController {
  constructor(private removePlantsByIdUseCase: RemovePlantByIdUseCase) {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      const plant = await this.removePlantsByIdUseCase.execute(id)

      return response.status(200).json(plant)
    } catch (error) {
      next(error)
    }
  }
}