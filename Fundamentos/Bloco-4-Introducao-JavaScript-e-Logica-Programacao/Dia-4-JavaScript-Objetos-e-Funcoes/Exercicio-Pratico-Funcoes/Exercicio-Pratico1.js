

function verificaPalindrome(palavra){
  let palavraInvertida = "";

  for(let index = palavra.length - 1; index >= 0; index -= 1){
    palavraInvertida += palavra[index];
  }
  
  if (palavraInvertida === palavra){
    console.log(true);
  }
  else{
    console.log(false);
  }
}


let palavra = 'arara';

verificaPalindrome(palavra);


