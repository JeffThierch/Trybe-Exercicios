console.log("Programa 09")

let ladoA = 60;
let ladoB = -20;
let ladoC = 60;

function trianguloOuNao(ladoA, ladoB, ladoC){
  const total = ladoA + ladoB + ladoC;
  const anguloMaximo = 180;
  
  if(total == anguloMaximo && ladoA > 0 && ladoB > 0 && ladoC > 0){
    console.log(true);
  }
  else if (total > anguloMaximo || total < anguloMaximo && ladoA > 0 && ladoB > 0 && ladoC > 0){
    console.log(false);
  }
  else{
    console.log("angulo invalido");
  }

}


trianguloOuNao(ladoA, ladoB, ladoC)