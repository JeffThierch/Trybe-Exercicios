import IPost from "../../interfaces/IPost";
import { BadRequestError } from "restify-errors";
import {validateIfKeysExist, validateIfValuesAreNotEmpty, validateDate} from './helpers'

function validatePostFieldsExist(postInfos: IPost): Error | boolean {
  const keys = ['title', 'author', 'category', 'publicationDate'];

  let [valid, key] = validateIfKeysExist<IPost>(keys, postInfos);

  if(!valid) {
    throw new BadRequestError(`The field ${key} is required`);
  }

  [valid, key] = validateIfValuesAreNotEmpty<IPost>(postInfos)

  if(!valid) {
    throw new BadRequestError(`The field ${key} cannot be empty or null`);
  }

  return true
}

function validateTheFieldsFormat(postInfos: IPost): Error | boolean {
  const {author, category, publicationDate} = postInfos
  switch(true) {
    case (author.length < 3):
      throw new BadRequestError("The field 'author' must be at least 3 characters")
    case (category.length < 3):
      throw new BadRequestError("The field 'category' must be at least 3 characters")
    case !validateDate(publicationDate):
      throw new BadRequestError("The field 'publicationDate' must have the format 'yyyy-mm-dd' ")
    default:
      return true
  }
}

export function validatePostFields(postInfos: IPost): Error | void {
  validatePostFieldsExist(postInfos);
  validateTheFieldsFormat(postInfos);
}

export function validateQueryStringDateFormat(date: Date): Error | void {
  if(!validateDate(date)) {
    throw new BadRequestError("The field 'publicationDate' must have the format 'yyyy-mm-dd' ")
  }
}