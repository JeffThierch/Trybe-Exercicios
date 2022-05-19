import { NextFunction, Request, Response } from "express";
import { GetPlantsUseCase } from "./GetPlantsUseCase";

export class GetPlantsController {
  constructor(private getPlantsUseCase: GetPlantsUseCase) {}

  async handle(_request: Request, response: Response, next: NextFunction) {
    try {
      const plants = await this.getPlantsUseCase.execute()

      return response.status(200).json(plants);
    } catch (error) {
      next(error)
    }
  }
}