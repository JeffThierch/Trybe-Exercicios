const { Patient, Surgerie, Plan } = require('../models')

const getAll = async (includeSurgeries) => {
  if(includeSurgeries) {
    const allPatientsWithSurgeries = await Patient.findAll(
      {include: {
        model: Surgerie, 
        as: 'surgeries', 
        through: { attributes: [] }, 
        attributes: {exclude: ['doctor']}
      }}
    )

    return allPatientsWithSurgeries
  }

  const allPatientsWithPlans = await Patient.findAll(
    {include: {model: Plan, as: 'plans', }}
  )

  return allPatientsWithPlans
};

const create = async ({fullName, plan_id}) => {
  const newPatient = await Patient.create({
    fullname: fullName,
    plan_id
  })

  return newPatient
}

module.exports = {
  getAll,
  create
}