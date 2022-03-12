const validateUsername = (username) => {
  return username.length > 3
}

const validateEmail = (email) => {
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  return emailRegex.test(email)

}

const validatePassword = (password) => {

  if (password.length < 4 || password.length > 8) {
    return false
  }

  const splitedPassword = password.toString().split('');

  const someCharacterIsNaN = splitedPassword.some((character) => isNaN(character))

  if(someCharacterIsNaN) {
    return false
  }

  return true

}

const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  if(!validateUsername(username) || !validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({message: 'invalid data'})
  }

  next();
}

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if(!validatePassword(password) || !validateEmail(email)) {
    return res.status(400).json({message: 'email or password is incorrect'})
  }

  next();
}

module.exports = {
  validateRegister,
  validateLogin
}
