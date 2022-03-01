const asyncCalculator = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    const params = [num1, num2, num3]
    if(params.some((param) => typeof param !== 'number')) {
      return reject(new Error('Informe apenas números'))
    }

    const result = (num1 + num2) * num3

    if(result < 50) {
      return reject(new Error('Valor muito baixo'))
    }

    return resolve(result)
  })
  return promise
}

asyncCalculator(5,5,10)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))