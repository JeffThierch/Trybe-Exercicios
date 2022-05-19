import { NextFunction, Request, Response } from "express";

export class GetPlantsController {
  constructor() {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}