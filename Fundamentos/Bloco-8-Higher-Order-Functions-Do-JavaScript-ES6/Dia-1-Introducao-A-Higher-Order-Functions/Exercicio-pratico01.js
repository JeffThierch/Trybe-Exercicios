const createEmployee = (fullName) => {
  const email = fullName.split(' ').join('_');
  /* Adicionar atribuir o fullName a chave FullName e opcional, pois ja seria adicionada automaticamente */
  return {fullName: fullName, email: `${email}@trybe.com` };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback(`Pedro Guerra`),
    id2: callback(`Luiza Drumond`), 
    id3: callback(`Carla Paiva`),
  }
  return employees;
};
