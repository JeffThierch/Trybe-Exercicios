let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = 0;

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] % 2 != 0){
    numerosImpares += 1;
  }
  else if(numerosImpares == 0){
    console.log("nenhum valor impar encontrado");
  };
  
};

console.log("Existem", numerosImpares, "Numeros impares no Array");