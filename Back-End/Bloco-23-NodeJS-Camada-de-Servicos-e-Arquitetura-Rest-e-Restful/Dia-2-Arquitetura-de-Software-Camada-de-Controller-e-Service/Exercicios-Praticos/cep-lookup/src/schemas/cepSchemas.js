const Joi = require('joi');
const { generateErrorObj } = require('./helpers')

const errors = {
  wrongCepFormat: {code: 400, message: 'CEP inválido'}
}

const validateCepFormat = (cep) => {
  const cepRegex = /\d{5}-\d{3}/

  const isValid = cepRegex.test(cep);

  return isValid
}

const validateCep = (cep) => {
  const isCepFormatValid = validateCepFormat(cep);

  if(!isCepFormatValid) {
    return generateErrorObj(errors.wrongCepFormat)
  }

  return true
  
}

const validateCepInfos = (cepInfosObj) => {
  const schema = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().max(50).required(),
    bairro: Joi.string().max(20).required(),
    localidade: Joi.string().max(20).required(),
    uf: Joi.string().max(2).required()
  })

  const isValid = schema.validate(cepInfosObj);

  if(isValid.error) {
    return generateErrorObj({code: 400, message: isValid.error.details[0].message})
  };

  return true

}

module.exports = {
  validateCep,
  validateCepInfos
}