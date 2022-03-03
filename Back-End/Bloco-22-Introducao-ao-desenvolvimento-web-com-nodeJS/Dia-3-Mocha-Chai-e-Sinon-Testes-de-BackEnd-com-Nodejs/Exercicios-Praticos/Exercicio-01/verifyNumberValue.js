function verifyNumberValue(number) {
  if(typeof number !== 'number') {
    return 'informe apenas numeros'
  }
  
  switch (true) {
    case number > 0:
      return 'positivo'
    case number < 0:
      return 'negativo'
    default:
      return 'neutro'
  }
}

module.exports = verifyNumberValue;