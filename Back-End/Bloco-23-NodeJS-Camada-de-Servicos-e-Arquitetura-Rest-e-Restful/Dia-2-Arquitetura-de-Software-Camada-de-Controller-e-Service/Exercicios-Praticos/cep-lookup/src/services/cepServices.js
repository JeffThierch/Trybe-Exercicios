const cepSchemas = require('../schemas/cepSchemas');
const cepModels = require('../models/cepModels');

const getByCep = async (cep) => {
  const isCepValid = cepSchemas.validateCep(cep);

  if(isCepValid.error) {
    return isCepValid
  };

  const cepInfos = await cepModels.getByCep(cep);

  if(cepInfos.length === 0) {
    const foreinApiCep = await cepModels.getCepInfosFromViaCep(cep);

    return foreinApiCep ? (
        {code: 200, message: foreinApiCep}
      ) : (
        {error: {code: 404, message: 'CEP não encontrado'}}
      )
  }

  return {code: 200, message: cepInfos};

}

const createCep = async (cep, logradouro, bairro, localidade, uf ) => {
  const CEP_OBJ = {
    cep, 
    logradouro, 
    bairro, 
    localidade, 
    uf,
  };

  const isCepInfosValid = cepSchemas.validateCepInfos(CEP_OBJ)

  if(isCepInfosValid.error) {
    return isCepInfosValid;
  }

  const cepAlreadyExists = await cepModels.getByCep(cep);

  if(cepAlreadyExists.length !== 0) {
    return {error: {code: 409, message: 'CEP já existente'}}
  };

  const createdCepInfos = await cepModels.createCep(CEP_OBJ);

  return {code: 201, message: createdCepInfos};
}

module.exports = {
  getByCep,
  createCep
}