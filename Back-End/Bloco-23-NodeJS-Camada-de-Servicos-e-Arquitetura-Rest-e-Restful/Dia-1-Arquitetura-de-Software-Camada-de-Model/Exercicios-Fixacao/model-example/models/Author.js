const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  fistName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
})

const getNewAuthor = ({id, fistName, middleName, lastName}) => {
  const fullName = [fistName, middleName, lastName].filter((name) => name).join(' ')

  return {
    id,
    fistName,
    middleName,
    lastName,
    fullName
  }
}

const getAll = async () => {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors;'
  const [authors] = await connection.execute(query);

  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}