import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/User.interface'
import { BadRequestError } from 'restify-errors'

const properties = ['name', 'email', 'password'];

function validateProperties(user: User): [boolean, string | null] {
  for(let i = 0; i < properties.length; i += 1) {
    if(!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]]
    }
  }

  return [true, null]
}

function validateIfValuesAreNotEmpty(user: User): [boolean, string | null] {
  const entries = Object.entries(user);

  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];

    if(!value) {
      return [false, property]
    }
  }

  return [true, null]
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[\w]+([.|\-|_][A-Za-z0-9]+)*@[a-z]{2,}(\.[a-z]{2,})+$/g;

  return emailRegex.test(email);
}

function validateIfHaveErrors(user: User): boolean {
  const { name, email, password } = user;
  
  switch(true) {
    case !(name.length > 3):
      throw new BadRequestError(`O campo "name", deve ter no minimo 3 caracteres`)
    case !validateEmail(email):
      throw new BadRequestError('O campo "email", deve possuir um email valido')
    case !(password.length >= 6 && password.length <= 12):
      throw new BadRequestError('O campo "password", deve possuir possuir entre 6 a 12 caracteres')
    default:
      return false
  } 
}

function validateUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body

  let [valid, property] = validateProperties(user);

  if(!valid) {
    throw new BadRequestError(`O campo ${property} é obrigatorio.`)
  }

  [valid, property] = validateIfValuesAreNotEmpty(user);

  if(!valid) {
    throw new BadRequestError(`O campo ${property} nao pode ser nulo ou vazio.`)
  }

  validateIfHaveErrors(user)

  next();
}

export default validateUser