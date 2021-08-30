let n = 7;
let asterisco = "*";


let meioDaPiramide = (n + 1) / 2;
let controleEsq = meioDaPiramide;
let controleDireito = meioDaPiramide;


for (let indexLinha = 1; indexLinha <= meioDaPiramide; indexLinha += 1){
  let linhaOutput = "";
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1){
    if(indexColuna == controleEsq || indexColuna == controleDireito || indexLinha == meioDaPiramide){
      linhaOutput += asterisco
    }
    else{
      linhaOutput += " ";
    }
  }
  controleDireito += 1;
  controleEsq -= 1;
  console.log(linhaOutput)
};
 