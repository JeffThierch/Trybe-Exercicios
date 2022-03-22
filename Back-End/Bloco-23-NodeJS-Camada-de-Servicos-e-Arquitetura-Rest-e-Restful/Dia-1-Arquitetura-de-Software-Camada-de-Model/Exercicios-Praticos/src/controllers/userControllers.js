const userServices = require(`../services/userServices.js`);

const createUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const createdUser = userServices.createUser(firstName, lastName, email, password);

  if(createdUser.error) {
    return next(createdUser.error);
  }

  return res.status(createdUser.code).json(createdUser.message);
}

const getAll = (_req, res) => {
  const allUsers = userServices.getAll();

  return res.status(allUsers.code).json(allUsers.message)
}


module.exports = {
  createUser,
  getAll
}