const readlineSync = require('readline-sync');

const userNumber = readlineSync.questionInt('Qual o numero? ')

const calcFatorial = (numero) => {
  if (numero <= 0 || !Number.isInteger(userNumber)) {
    console.log('Use apenas numeros inteiros maiores maiores que 0!')
    const userNumber = readlineSync.questionInt('Qual o numero? ')
    calcFatorial(userNumber)
  } else {
    let total = numero
    for (let i = (numero - 1); i >= 1; i -= 1) {
      total *= i
    }
    console.log(`O fatorial de ${numero} e ${total}!`)
  }
}

calcFatorial(userNumber)
