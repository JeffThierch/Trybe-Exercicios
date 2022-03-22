const { generateErrorObj } = require('./helpers')

const errors = {
  wrongCepFormat: {code: 400, message: 'CEP inválido'}
}

const validateCepFormat = (cep) => {
  const cepRegex = /\d{5}-?\d{3}/

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

module.exports = {
  validateCep
}