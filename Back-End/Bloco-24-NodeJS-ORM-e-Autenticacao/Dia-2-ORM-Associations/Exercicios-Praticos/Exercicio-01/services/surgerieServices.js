const {Surgerie, Patient} = require('../models')

const getByName = async (name) => {
  const surgerie = await Surgerie.findAll({
    where: {doctor: name},
    include: [{model: Patient, as:'patients', through: { attributes: [] }}]
  })

  return surgerie
};

module.exports = {
  getByName
}