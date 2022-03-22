const connection = require('./connection')

const getByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

  const [cepInfos] = await connection.execute(query, [cep]);

  return cepInfos;
}

const createCep = async ({cep, logradouro, bairro, localidade, uf} = {}) => {
  const query = 'INSERT INTO cep_lookup.ceps VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return {cep, logradouro, bairro, localidade, uf}
}

module.exports = {
  getByCep,
  createCep
}