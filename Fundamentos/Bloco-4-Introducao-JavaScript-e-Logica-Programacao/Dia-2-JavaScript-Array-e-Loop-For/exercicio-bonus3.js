let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers2 = []

for(let i = 0; i < numbers.length; i += 1){
  if(i + 1 < numbers.length){ /* Se index + 1 for menor que o tamanho de numbers */
    numbers2.push(numbers[i] * numbers[i + 1]) /* Sera feito um push com a multiplicacao de numbers[i] com numbers[i + 1] */
  }
  else{
    numbers2.push(numbers[i] * 2) /* Caso nao tenha mais numeros sera por 2 */
  }
}

console.log(numbers2)