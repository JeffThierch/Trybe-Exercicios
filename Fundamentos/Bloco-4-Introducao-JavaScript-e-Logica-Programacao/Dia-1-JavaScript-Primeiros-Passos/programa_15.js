const salarioBruto = 20000;

function calculaINSS(salarioBruto){
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

return valorINSS;

}


function calculandoIR(salarioBruto ,valorINSS){
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
  const salarioLiquidoArredondado = salarioLiquido.toFixed(2)
  const descontado = salarioBruto - salarioLiquido
  const valorDescontadoArredondado = descontado.toFixed(2)
  
  console.log("Seu salario liquido e de R$ " + salarioLiquidoArredondado)
  console.log("Foram descontados R$ " + valorDescontadoArredondado)
}

let valorINSS = calculaINSS(salarioBruto)

calculandoIR(salarioBruto, valorINSS)


