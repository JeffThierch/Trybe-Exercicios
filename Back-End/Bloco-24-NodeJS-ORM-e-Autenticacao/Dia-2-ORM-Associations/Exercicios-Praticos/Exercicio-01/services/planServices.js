const { Patient, Plan } = require('../models')

const getById = async (id) => {
  const planInfos = await Plan.findAll({
    where: {plan_id: id},
    include: {model: Patient, as: 'patients'}
  })
  return planInfos
}

module.exports = {
  getById
}