
function verificaFinalDaPalavra(palavra, finalDaPalavra){
  palavra = palavra.split("");
  finalDaPalavra = finalDaPalavra.split("");
  let eFinalDaPalara = true;
  
  for (let index = 0; index < finalDaPalavra.length; index += 1){
    if(palavra[palavra.length - finalDaPalavra.length + index] != finalDaPalavra[index]){
      eFinalDaPalara = false;
    }
  }
  return eFinalDaPalara;

}  

console.log(verificaFinalDaPalavra("trybe", "be"))

