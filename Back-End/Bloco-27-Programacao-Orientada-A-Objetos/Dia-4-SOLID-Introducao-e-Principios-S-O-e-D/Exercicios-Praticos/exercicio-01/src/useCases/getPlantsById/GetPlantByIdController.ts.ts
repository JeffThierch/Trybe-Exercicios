import { NextFunction, Request, Response } from "express";

export class GetPlantsByIdController {
  constructor() {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}