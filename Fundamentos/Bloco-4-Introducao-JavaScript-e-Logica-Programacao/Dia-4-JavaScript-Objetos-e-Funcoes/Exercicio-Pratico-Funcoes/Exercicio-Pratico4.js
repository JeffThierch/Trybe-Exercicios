
function maiorStingDoArray (aray){
  let stingUnica = "";
  
  let maiorSting = "";
  
  let contador = 0;
  
  for(let index = 0; index < nomes.length; index += 1){
    for(let i = 0; i < index ; i +=1){
      stingUnica = nomes[index];
      if(stingUnica.length > contador){
        contador += stingUnica.length;
        maiorSting = stingUnica;
      }
      else{
        null;
      }
    
    }
    
  }
  console.log(maiorSting);
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

maiorStingDoArray(nomes);

