const cepServices = require('../services/cepServices');

const getByCep = async (req, res, next) => {
  const { cep } = req.params;

  const cepInfos = await cepServices.getByCep(cep)

  if(cepInfos.error) {
    return next(cepInfos.error)
  }
  
  return res.status(cepInfos.code).json(cepInfos.message);
}


module.exports = {
  getByCep,
}