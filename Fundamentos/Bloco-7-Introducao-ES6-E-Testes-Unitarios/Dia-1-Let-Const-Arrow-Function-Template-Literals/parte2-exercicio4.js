/* Exercicio 4 */

const replaceX = (frase, stingTrocada) => {
  let novaSting;
  if (frase.includes('x') === true) {
    novaSting = frase.replace('x', stingTrocada)
  } else {
    return console.log('A frase nao possui (x)');
  }
  return novaSting
}
const arraySkills = ['CSS' , 'HTML', 'JS', 'NodeJS', 'React']

const fraseTrocada = replaceX("Tryber x aqui!", 'Garai')

/* Exercio 5 */

const concatSkills = (skills) => `${fraseTrocada} Minhas cinco principais habilidades sao: ${skills.sort()} #goTrybe`


console.log(concatSkills(arraySkills))