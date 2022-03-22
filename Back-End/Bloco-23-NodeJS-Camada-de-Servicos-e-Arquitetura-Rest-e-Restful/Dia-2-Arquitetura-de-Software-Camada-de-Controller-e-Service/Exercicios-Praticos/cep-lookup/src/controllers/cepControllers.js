const cepServices = require('../services/cepServices');

const getByCep = async (req, res, next) => {
  const { cep } = req.params;

  const cepInfos = await cepServices.getByCep(cep)

  if(cepInfos.error) {
    return next(cepInfos.error)
  }
  
  return res.status(cepInfos.code).json(cepInfos.message);
}

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  
  const cepInfos = await cepServices.createCep(cep, logradouro, bairro, localidade, uf);

  if(cepInfos.error) {
    return next(cepInfos.error)
  }
  
  return res.status(cepInfos.code).json(cepInfos.message);
}


module.exports = {
  getByCep,
  createCep
}