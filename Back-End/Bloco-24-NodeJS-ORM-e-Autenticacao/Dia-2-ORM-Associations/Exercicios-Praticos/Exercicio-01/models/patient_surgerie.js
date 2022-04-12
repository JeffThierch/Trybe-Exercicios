const patientSurgerie = (sequelize, DataTypes) => {
  const patientSurgerie = sequelize.define('patientSurgerie', {}, {
    timestamps: false,
    tableName: 'Patient_surgeries'
  });

  patientSurgerie.associate = (models) => {
    models.Patient.belongsToMany(models.Surgerie, {
      as: 'surgeries',
      through: patientSurgerie,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    })

    models.Surgerie.belongsToMany(models.Patient, {
      as: 'patients',
      through: patientSurgerie,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    })
  }

  return patientSurgerie;
}

module.exports = patientSurgerie