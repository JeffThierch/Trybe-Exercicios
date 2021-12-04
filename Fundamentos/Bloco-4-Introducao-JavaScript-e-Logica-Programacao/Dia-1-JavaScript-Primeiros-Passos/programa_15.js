const salarioBruto = 4173.08;

function calculaINSS(salarioBruto){
/* Calculando INSS  */

let valorINSS;

if(salarioBruto <= 1100.00){
  aliquota = 7.5 / 100;
  valorINSS = salarioBruto * aliquota;
}
else if (salarioBruto >= 1100.01 && salarioBruto <= 2203.48){
  aliquota = 9 / 100;
  valorINSS = (salarioBruto - 1100.01) * aliquota + 82.50;
  
}
else if (salarioBruto >= 2203.49 && salarioBruto <= 3305.22){
  aliquota = 12 / 100;
  valorINSS = (salarioBruto - 2203.49) * aliquota + 82.50 + 99.31;
  
}
else if (salarioBruto >= 3305.23 && salarioBruto <= 6433.57) {
  aliquota = 14 / 100;
  valorINSS = (salarioBruto - 3305.23) * aliquota + 82.50 + 99.31 + 132.20;
}
else{
  valorINSS = 751.99
  
}

return valorINSS;

}

console.log(calculaINSS(salarioBruto))

function calculandoIR(salarioBruto ,valorINSS){
  let salarioBase = (salarioBruto - valorINSS);

  let impostoRenda;
  
  if(salarioBase < 1903.98){
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
  const salarioLiquidoArredondado = salarioLiquido.toFixed(2)
  const descontado = salarioBruto - salarioLiquido
  const valorDescontadoArredondado = descontado.toFixed(2)
  
  console.log("Seu salario liquido e de R$ " + salarioLiquidoArredondado)
  console.log("Foram descontados R$ " + valorDescontadoArredondado)
}

let valorINSS = calculaINSS(salarioBruto)

calculandoIR(salarioBruto, valorINSS)



