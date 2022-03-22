const USERS_DB = [];

const createUser = (firstName, lastName, email, password) => {
  const USER_MODEL = {
    firstName,
    lastName,
    email,
    password
  }

  USERS_DB.push(USER_MODEL);

  return USER_MODEL;
};

const getAll = () => USERS_DB

module.exports = {
  createUser,
  getAll
}