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

const getById = (req, res, next) => {
  const { id } = req.params;

  const user = userServices.getById(id)

  if(user.error) {
    return next(user.error);
  }

  return res.status(user.code).json(user.message);

}

module.exports = {
  createUser,
  getAll,
  getById
}