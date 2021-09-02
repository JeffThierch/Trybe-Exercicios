

function indexDoMenorNumero(array){
  let numeroInicial = numeros[0];
  
  let posicaoIndex = "";
  
  for (let index = 0; index < numeros.length; index += 1){
    if(numeros[index] < numeroInicial){
     posicaoIndex = numeros.indexOf(numeros[index]);
     
    }
    else{
      null;
    }
  }
  console.log(posicaoIndex);
}

let numeros = [2, 4, 6, 7, 10, 0, -3];

indexDoMenorNumero(numeros)
