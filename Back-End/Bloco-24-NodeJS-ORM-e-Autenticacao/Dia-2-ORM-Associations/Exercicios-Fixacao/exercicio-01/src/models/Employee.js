module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    timestamp: false,
    underscore: true,
    tableName: 'Employees'
  })

  Employee.associate = (models) => {
    Employee.hasOne(models.Addresse, 
      {foreingKey: 'employeeId', as: 'addresses'});
  };

  return Employee
};