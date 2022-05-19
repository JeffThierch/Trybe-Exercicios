import { NextFunction, Request, Response } from "express";

export class RemovePlantByIdController {
  constructor() {}
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}