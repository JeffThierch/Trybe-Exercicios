let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumeros = 0

for (let i = 0; i < numbers.length; i += 1){
  somaNumeros += numbers[i];
}

let mediaAritmetica = somaNumeros / numbers.length ;

if(mediaAritmetica > 20){
  console.log("valor maior que 20")
}
else{
  console.log("valor menor que 20")
}
