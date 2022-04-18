const authServices = require('../services/authServices');

const authJwt = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    const { username, admin } = authServices.validateJwt({ token });

    req.user = {
      username,
      admin,
    };

    next();
  } catch (error) {
    console.error(error.message);

    return next(error);
  }
};

module.exports = authJwt;