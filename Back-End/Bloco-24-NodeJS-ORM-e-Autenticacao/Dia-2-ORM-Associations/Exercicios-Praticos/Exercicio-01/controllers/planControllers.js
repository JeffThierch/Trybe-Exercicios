const planServices = require('../services/planServices')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const planInfos = await planServices.getById(id);

    return res.status(200).json(planInfos)
  } catch (error) {
    console.log(error);
    return next(error);
  }
  
};

module.exports = {
  getById
}