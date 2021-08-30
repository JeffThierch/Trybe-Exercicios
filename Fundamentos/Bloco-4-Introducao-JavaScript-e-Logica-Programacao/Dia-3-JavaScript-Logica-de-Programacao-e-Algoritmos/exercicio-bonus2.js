let divisor = 1;

let numero = 3;

for(let n = 2; n <= numero; n += 1){
  if(numero % n === 0){
    divisor += 1
  }
}

if (divisor === 2){
  console.log(numero + " e primo")
}
else{
  console.log(numero + " nao e primo ")
}