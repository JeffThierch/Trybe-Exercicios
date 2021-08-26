const salarioBruto = 20000;

/* Calculando INSS  */

let valorINSS;

if(salarioBruto <= 1556.94){
  aliquota = 8 / 100;
  valorINSS = salarioBruto * aliquota;
}
else if (salarioBruto >= 1556.96 && salarioBruto <= 2594.92){
  aliquota = 9 / 100;
  valorINSS = salarioBruto * aliquota;
  
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  aliquota = 11 / 100;
  valorINSS = salarioBruto * aliquota;
  
}
else{
  valorINSS = 570.88
  
}

let salarioBase = salarioBruto - valorINSS;

let impostoRenda;

if(salarioBase < 1903.38){
  impostoRenda = 0
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  impostoRenda = (salarioBase * 0.075) - 142.8;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  impostoRenda = (salarioBase * 0.15) - 354.8;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  impostoRenda = (salarioBase * 0.225) - 636.13;
}
else{
  impostoRenda = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - impostoRenda
const descontado = salarioBruto - salarioLiquido

console.log("Seu salario liquido e de R$ " + salarioLiquido)
console.log("Foram descontados R$ " + descontado)