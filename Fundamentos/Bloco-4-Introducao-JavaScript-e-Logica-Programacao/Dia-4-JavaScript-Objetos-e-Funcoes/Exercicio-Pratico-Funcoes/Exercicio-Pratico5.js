
function contadorDeNumerosIguais(array){
  let numeroUnico = 0;
  
  let numeroQueMaisParece = 0;
  
  let contador = 0;
  
  let contadorNumero = 0;
  
  for (let index = 0; index < numeros.length; index += 1){
    numeroUnico = numeros[index];
   
    for (let i = 0; i < numeros.length; i += 1){
      if(numeros[i] === numeroUnico)
      {
        contador += 1;
        if (contador > contadorNumero)
        {
          contadorNumero = contador;
          numeroQueMaisParece = numeros[i];
        }
      }
      else 
      {
        null;
      }
  
    }
    contador = 0
  }
  
  console.log("O numero que mais se repete e:", numeroQueMaisParece, "Ele se repete:", contadorNumero, "Vezes")

};

let numeros = [2, 3, 2, 5, 8, 2, 3]; 

contadorDeNumerosIguais(numeros)
