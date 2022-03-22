const USERS_DB = [];

const createUser = (firstName, lastName, email, password) => {
  const USER_MODEL = {
    id: (USERS_DB.length === 0 ? 1 : (USERS_DB[USERS_DB.length - 1].id + 1)),
    firstName,
    lastName,
    email,
    password
  }

  USERS_DB.push(USER_MODEL);

  return USER_MODEL;
};

const getAll = () => USERS_DB;

const getById = (id) => {
  const userById = USERS_DB.find((user) => user.id === parseInt(id, 10))

  return userById;
}

module.exports = {
  createUser,
  getAll,
  getById
}