const readlineSync = require('readline-sync');

const userOptions = ['Calculadora IMC', 'Calculo de Velocidade Media', 'Jogo Adivinho (Numeros)', 'Calculadora Fatorial']

const userAnsewer = readlineSync.keyInSelect(userOptions, 'Qual script voce deseja?')

const runScript = (userAnsewer) => {
  switch(userAnsewer) {
    case 0:
      return require('./imc_calc')
    case 1:
      return require('./velocidade')
    case 2:
        return require('./sorteio')
    case 3:
        return require('./fatorial')
    default:
        return console.log('Ate logo!')
  }
}

runScript(userAnsewer);