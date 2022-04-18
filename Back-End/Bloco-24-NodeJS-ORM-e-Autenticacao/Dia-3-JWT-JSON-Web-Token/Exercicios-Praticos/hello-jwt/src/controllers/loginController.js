const loginServices = require('../services/loginServices');

const realizeLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const token = await loginServices.realizeLogin({ username, password });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);

    return next(error);
  }
};

module.exports = {
  realizeLogin,
};