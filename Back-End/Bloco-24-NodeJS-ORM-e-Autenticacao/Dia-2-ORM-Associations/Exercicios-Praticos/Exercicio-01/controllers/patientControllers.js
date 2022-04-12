const patientServices = require('../services/patientServices')

const getAll = async (req, res, next) => {
  try {
    const { includeSurgeries } = req.query;

    const allPatients = await patientServices.getAll(includeSurgeries);

    return res.status(200).json(allPatients)
  } catch (error) {
    console.log(error);
    return next(error);
  }
  
};

const create = async (req, res, next) => {
  try {
    const { fullName, plan_id } = req.body;

    const newPatient = await patientServices.create({fullName, plan_id});

    return res.status(201).json(newPatient)
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

module.exports = {
  getAll,
  create
}