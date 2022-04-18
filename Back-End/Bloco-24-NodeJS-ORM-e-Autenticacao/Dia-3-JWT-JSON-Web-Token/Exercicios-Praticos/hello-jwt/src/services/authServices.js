const tokenValidation = require('./validations/tokenValidation');
const { validateToken } = require('./helpers');

const validateJwt = ({ token }) => {
  tokenValidation.validateJwtToken({ token });

  const { payload } = validateToken({ token });

  return payload;
};

module.exports = {
  validateJwt,
};