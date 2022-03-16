const Author = require('../models/Author')

// Cria uma string com o nome completo da pessoa autora

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
  };

  const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);

}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return getNewAuthor(author);
}

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if(!validAuthor) {
    return false;
  }

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if(existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora ja existe com esse nome completo'
      }
    }
  }

  const [author] = await Author.createAuthor(firstName, middleName, lastName);

  const authorId = author.insertId

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName,
  })
}

module.exports = {
  getAll,
  findById,
  createAuthor,

}