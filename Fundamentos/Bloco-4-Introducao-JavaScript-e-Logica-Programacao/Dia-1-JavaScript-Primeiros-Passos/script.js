const a = 30;
const b = 20;

let adicao = a + b;

console.log(adicao);

let subtracao = a - b;

console.log(subtracao);

let multiplicacao = a * b;

console.log(multiplicacao);

let divisao = a / b;

console.log(divisao);

let modulo = a % b;

console.log(modulo);


console.log("Programa 06")

const numeroA = 50;
const NumeroB = 55.5;

if(numeroA > NumeroB){
  console.log("O maior numero e: " + numeroA);
}else{
  console.log("O maior numero e: " + NumeroB);
};

console.log("Programa 07")

const numero1 = 50;
const numero2 = 40;
const numero3 = 30;

if(numero1 > numero2 && numero1 > numero3){
  console.log("O Numero: " + numero1 + " e maior" );
}else if(numero2 > numero1 && numero2 > numero3){
  console.log("O Numero: " + numero2 + " e maior" );
}else{
  console.log("O Numero: " + numero3 + " e maior" );
}

console.log("Programa 08");

const numeroDado = 0;

if(numeroDado < 0){
  console.log("negative");
}else if(numeroDado > 0){
  console.log("positive");
}else{
  console.log("zero");
}

console.log("Programa 09")

let ladoA = 60;
let ladoB = -20;
let ladoC = 60;

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

console.log("Programa 10")

const  pecaEscolhida = "bispo"

switch(pecaEscolhida.toLowerCase()){
  case "rei":
    console.log("Todas as direcoes, somente uma casa por vez")
    break;
  case "rainha":
    console.log("ao longo de todas as direcoes, mas nao pode pular pecas");
    break;
  case "bispo":
    console.log("Diagonais, nao pode pular pecas");
    break;
  case "cavalo":
    console.log("Movimenta em L (2 casas na horizontal e 1 na vertical), pode pular pecas");
    break;
  case "torre":
    console.log("Vertical ou Horizontal, nao pode pular pecas");
    break;
  case "peao":
    console.log("Movimenta-se apenas pra frente e somente captura 2 pecas na diagonal");
    break;  
}





