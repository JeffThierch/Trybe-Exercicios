const surgerieServices = require('../services/surgerieServices')

const getByName = async (req, res, next) => {
  try {
    const {name} = req.params;

    const surgeries = await surgerieServices.getByName(name)

    return res.status(200).json(surgeries)
  } catch (error) {
    next(error)
  }
  
};

module.exports = {
  getByName
}