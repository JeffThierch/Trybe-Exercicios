let n = 5;
let asterisco = "*";
let linhaInput = "";


let meioDaPiramide = (n + 1) / 2;
let controleEsq = meioDaPiramide;
let controleDireito = meioDaPiramide;


for (let indexLinha = 0; indexLinha <= meioDaPiramide; indexLinha += 1){
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1){
    if(indexColuna > controleEsq && indexColuna < controleDireito){
      linhaInput = linhaInput + asterisco;
    }
    else{
      linhaInput = linhaInput + " ";
    }
  }
  console.log(linhaInput)
  linhaInput = "";
  controleDireito += 1;
  controleEsq -= 1;
};
 