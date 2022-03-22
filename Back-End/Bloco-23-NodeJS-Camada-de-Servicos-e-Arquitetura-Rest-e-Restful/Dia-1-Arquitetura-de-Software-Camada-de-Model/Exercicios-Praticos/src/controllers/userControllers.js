const userServices = require(`../services/userServices.js`);

const createUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const createdUser = userServices.createUser(firstName, lastName, email, password);

  if(createdUser.error) {
    return next(createdUser.error);
  }

  return res.status(createdUser.code).json(createdUser.message);
}


module.exports = {
  createUser,
}