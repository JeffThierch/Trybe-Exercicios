const cepSchemas = require('../schemas/cepSchemas');
const cepModels = require('../models/cepModels')

const getByCep = async (cep) => {
  const isCepValid = cepSchemas.validateCep(cep);

  if(isCepValid.error) {
    return isCepValid
  };

  const cepInfos = await cepModels.getByCep(cep);

  if(cepInfos.length === 0) {
    return {error: {code: 404, message: 'CEP não encontrado'}}
  }

  return {code: 200, message: cepInfos};

}

module.exports = {
  getByCep
}