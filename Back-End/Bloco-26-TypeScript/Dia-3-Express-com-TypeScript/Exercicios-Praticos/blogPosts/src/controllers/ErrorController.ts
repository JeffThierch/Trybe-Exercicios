import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default (err: Error, _request: Request, response: Response, _next: NextFunction) => {
  const { name, message } = err

  console.log(message, name);

  switch(name) {
    case 'NotFoundError':
      return response.status(StatusCodes.NOT_FOUND).json({message});
    case 'BadRequestError': 
      return response.status(StatusCodes.BAD_REQUEST).json({message});
    default:
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server Error =(' });
  }
}