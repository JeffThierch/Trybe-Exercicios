console.log("Programa 11")

let notaPorcentagem = 110

function conversorNotaParaLetra (notaPorcentagem){

  const calculoPorcentagem = (notaPorcentagem / 100) * 10
  const resultado = calculoPorcentagem
  
  if(resultado >= 9 && resultado <= 10){
     console.log("A")
  }
  else if(resultado >= 8 && resultado < 9){
    console.log("B")
  }
  else if(resultado >= 7 && resultado < 8){
    console.log("C")
  }
  else if(resultado >= 6 && resultado < 7){
    console.log("D")
  }
  else if(resultado >= 5 && resultado < 6){
    console.log("E")
  }
  else if(resultado < 5 && resultado >= 0){
    console.log("F")
  }
  else{
    console.log("Insira uma nota valida")
  }

  

}


conversorNotaParaLetra(50)