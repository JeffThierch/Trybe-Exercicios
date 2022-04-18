const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = ({ username, admin = false }) => {
  const token = jwt.sign({ payload: { username, admin } }, jwtSecret, jwtConfig);

  return token;
};

const validateToken = ({ token }) => {
  const tokenDecored = jwt.verify(token, jwtSecret);
  return tokenDecored;
};

module.exports = {
  generateToken,
  validateToken,
};