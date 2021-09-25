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