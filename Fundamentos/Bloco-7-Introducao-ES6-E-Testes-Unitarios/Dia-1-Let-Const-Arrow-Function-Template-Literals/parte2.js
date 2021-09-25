/* EXERCICIO 1 */

const fatorial = (numero) => {
 let controle = numero;

 for (let i = numero - 1; i > 0; i -= 1) {
  controle *= i
  }
  return (numero < 0) ? 'nao existe fatorial de numero negativo' : controle
}

console.log(fatorial(5))



/* Exercio 2 */

const longestWord = (frase) => {
  let controle = 0;
  let palavra;
  const fraseSplit = frase.split(' ')
  for (let i = 0; i < fraseSplit.length; i += 1 ) {
    if (fraseSplit[i].length > controle) {
      controle = fraseSplit[i].length;
      palavra = fraseSplit[i];
    }
  }
  console.log(palavra)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")

/* Exercicio 3 */

const btnclick = document.getElementById('btn-click')
let clickCount = 0

const clickCounter = () => {
  clickCount += 1
  const counter = document.getElementById('contador').innerHTML = clickCount
}

btnclick.addEventListener('click', clickCounter)