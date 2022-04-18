const { generateToken } = require('./helpers');
const loginValidations = require('./validations/loginValidations');

const realizeLogin = async ({ username, password }) => {
  loginValidations.validateLoginFields({ username, password });

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const token = generateToken({ username, password, admin: true });

    return token;
  }

  const token = generateToken({ username });

  return token;
};

module.exports = {
  realizeLogin,
};