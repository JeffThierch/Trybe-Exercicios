function arrayOfNumbers(vetor) {
  let arrayNumerosPares = [];
  let numeroAtual = 0;

  for(let index = 0; index < vetor.length; index += 1) {
    const numeros = vetor[index];
    for(let indexNumero = 0; indexNumero < numeros.length; indexNumero +=1) {
      numeroAtual = numeros[indexNumero]
      if(numeroAtual % 2 === 0) {
        arrayNumerosPares.push(numeroAtual)
      }
    }
  }
  return arrayNumerosPares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector))

