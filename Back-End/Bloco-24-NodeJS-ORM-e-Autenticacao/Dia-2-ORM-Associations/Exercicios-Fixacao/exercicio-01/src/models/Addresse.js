module.exports = (sequelize, DataTypes) => {
  const Addresse = sequelize.define('Addresse', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: {
      foreingKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    timestamp: false,
    underscore: true,
    tableName: 'Addresses'
  })

  Addresse.associete = (models) => {
    Addresse.belongsTo(models.Employee, 
      {foreingKey: 'employeeId', as: 'employee'});
  };

  return Addresse;
}