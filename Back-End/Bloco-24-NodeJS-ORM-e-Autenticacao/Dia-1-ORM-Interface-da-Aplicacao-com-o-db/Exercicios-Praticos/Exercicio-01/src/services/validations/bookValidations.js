const validateIfFieldExist = (field) => field !== undefined || field.length > 0;

const validateBookFields = ({ title, author}) => {
  switch(true) {
    case !validateIfFieldExist(title):
      throw new Error('TITLE_IS_REQ');
    case !validateIfFieldExist(author):
      throw new Error('AUTHOR_IS_REQ')
    default:
      return true;
  }
};

module.exports = {
  validateBookFields,
}