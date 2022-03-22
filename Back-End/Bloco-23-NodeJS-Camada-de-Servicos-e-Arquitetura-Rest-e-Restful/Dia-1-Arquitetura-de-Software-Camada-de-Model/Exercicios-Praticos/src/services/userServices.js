const userSchema = require('../schemas/userSchemas');
const userModel = require('../model/userModels')

const createUser = (firstName, lastName, email, password) => {
  const isFieldsValid = userSchema.validateFields(firstName, lastName, email, password);

  if (isFieldsValid.error) {
    return isFieldsValid;
  }

  const userCreted = userModel.createUser(firstName, lastName, email, password);

  return { code: 201, message: userCreted };
}

module.exports = {
  createUser,
}