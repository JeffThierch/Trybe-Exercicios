const errors = {
  shorterPassword: {code: 400, message: 'O campo "password" deve ter pelo menos 6 caracteres'},
  nonExistentFirstName: {code: 400, message: 'O campo "firstName" e obrigatorio!'},
  nonExistentLastName: {code: 400, message: 'O campo "lastName" e obrigatorio!'},
  nonExistentEmail: {code: 400, message: 'O campo "email" e obrigatorio!'},
}

const generateErrorMessage = (error) => ({error})

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    return false;
  }

  return true;
}

const validateIfFieldExists = (field) => {
  if (!field) {
    return false;
  }

  return true;
}

const validateFields = (firstName, lastName, email, password) => {
  switch(true) {
    case !validateIfFieldExists(firstName):
      return generateErrorMessage(errors.nonExistentFirstName)
    case !validateIfFieldExists(lastName):
      return generateErrorMessage(errors.nonExistentLastName);
      case !validateIfFieldExists(email):
        return generateErrorMessage(errors.nonExistentEmail)
    case !validatePassword(password):
      return generateErrorMessage(errors.shorterPassword);
    default:
      return {}
  }
}

module.exports = {
  validateFields
}