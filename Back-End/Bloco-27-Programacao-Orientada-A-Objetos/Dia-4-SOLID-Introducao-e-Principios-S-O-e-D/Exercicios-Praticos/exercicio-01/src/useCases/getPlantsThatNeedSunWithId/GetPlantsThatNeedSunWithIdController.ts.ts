import { NextFunction, Request, Response } from "express";
import { GetPlantsThatNeedSunWithIdUseCase } from "./GetPlantsThatNeedSunWithIdUseCase";

export class GetPlantsThatNeedSunWithIdController {
  constructor(private getPlantsThatNeedSunWithIdUseCase: GetPlantsThatNeedSunWithIdUseCase) {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      const plants = await this.getPlantsThatNeedSunWithIdUseCase.execute(id)

      return response.status(200).json(plants)
    } catch (error) {
      next(error)
    }
  }
}