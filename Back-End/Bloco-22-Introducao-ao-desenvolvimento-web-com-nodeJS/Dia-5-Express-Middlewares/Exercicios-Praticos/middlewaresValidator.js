const res = require("express/lib/response")

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

const validateToken = (req, res, next) => {
  const tokenRegex = /[A-Za-z0-9]/g
  const token = req.headers.authorization

  const isTokenFormatValid = tokenRegex.test(token)

  if (!token || !isTokenFormatValid || token.length !== 12) {
    return res.status(401).json({message: 'Invalid token!'})
  }

  next()
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

const validateRoute = (_req, res, _next) => {
  res.status(404).json({message: 'Opsss, route not found!'})
}


module.exports = {
  validateRegister,
  validateLogin,
  validateToken,
  validateRoute
}
