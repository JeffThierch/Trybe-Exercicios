const topSecretServices = require('../services/topSecretServices');

const getSecret = async (req, res, next) => {
  try {
    const secretInfo = topSecretServices.getSecret();

    return res.status(200).json({ secretInfo });
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = {
  getSecret,
};