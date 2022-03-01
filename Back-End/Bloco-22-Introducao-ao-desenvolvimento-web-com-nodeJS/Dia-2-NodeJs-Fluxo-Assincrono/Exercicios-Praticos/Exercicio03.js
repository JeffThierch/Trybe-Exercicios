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

const randNumber = () => {
  return Math.floor(Math.random() * 100 + 1)
}

async function main() {
  try {
    const n1 = randNumber();
    const n2 = randNumber();
    const n3 = randNumber();
  
    const result = await asyncCalculator(n1, n2, n3)
    
    console.log(result)
  } catch(err) {
    console.log(err.message)
    process.exit(1);
  }
}

main()


