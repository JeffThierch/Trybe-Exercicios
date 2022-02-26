const readlineSync = require('readline-sync');

const userWeight = readlineSync.questionFloat('Qual seu peso? ')
const userHeight = readlineSync.questionFloat('Qual sua altura (m)? ')

const verifyIMC = (imc) => {
  switch(true) {
    case imc < 18.5:
      return 'Abaixo do peso (magreza)'
    case (imc >= 18.5 && imc <= 24.9):
       return 'Peso normal'
    case (imc >= 25.0 && imc <= 29.9):
       return 'Acima do peso (sobrepeso)'
    case (imc >= 30.0 && imc <= 34.9):
       return 'Obesidade grau I'
    case (imc >= 35.0 && imc <= 39.9):
       return 'Obesidade grau II'
    default: {
      return 'Obesidade graus III e IV'
    }
  } 
}

const calcImc = (weight, height) => {
  const imcResult = weight / (height * 2)

  const imcMessage = verifyIMC(imcResult)
  
  console.log(`Seu IMC e: ${imcResult.toFixed(2)}`);
  console.log(`Sua situacao e considerada: ${imcMessage}`)
}


calcImc(userWeight, userHeight);