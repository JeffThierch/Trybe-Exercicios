const connection = require('./connection')

const getByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?'
  const [cepInfos] = await connection.execute(query, [cep]);

  return cepInfos;
}

module.exports = {
  getByCep
}