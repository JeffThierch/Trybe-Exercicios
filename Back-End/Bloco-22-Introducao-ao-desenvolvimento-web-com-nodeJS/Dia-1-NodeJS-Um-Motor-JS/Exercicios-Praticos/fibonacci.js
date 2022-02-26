const readlineSync = require('readline-sync');

const userLimit = readlineSync.questionInt('Ate qual o tamanho da sequencia desejada? ')

const calcFibo = (userLimit) => {
  if (userLimit <= 0 || !Number.isInteger(userLimit)) {
    console.log('Utilize apenas numeros inteiros maiores do que 0')
    const userLimit = readlineSync.questionInt('Ate qual o tamanho da sequencia desejada? ')
    calcFibo(userLimit)
  } else {
    let fiboArray = [0, 1]
  
    for(let i = 0; fiboArray.length < userLimit; i += 1) {
      const result = (fiboArray[i] + fiboArray[i + 1])
      fiboArray.push(result)
    }
    
    console.log(`A sequencia fibonacci e: ${ fiboArray }`)
  }
}

calcFibo(userLimit)