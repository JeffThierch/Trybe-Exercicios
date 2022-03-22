const connection = require('./connection');
const Axios = require('axios').default

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

const getCepInfosFromViaCep = async (cep) => {
  const { data } = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  
  if(data.erro) {
    return null
  }

  const {cep: newCep, logradouro, bairro, localidade, uf} = data

  const cepInfos = await createCep({cep: newCep, logradouro, bairro, localidade, uf})

  return cepInfos
}

module.exports = {
  getByCep,
  createCep,
  getCepInfosFromViaCep
}