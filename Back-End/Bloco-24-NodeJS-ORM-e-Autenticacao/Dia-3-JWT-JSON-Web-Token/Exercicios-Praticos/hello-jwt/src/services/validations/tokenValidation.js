const Joi = require('joi');

const tokenSchema = Joi.object({
  token: Joi.string()
    .required(),
});

const validateJwtToken = ({ token }) => {
  Joi.attempt({ token }, tokenSchema);
};

module.exports = {
  validateJwtToken,
};