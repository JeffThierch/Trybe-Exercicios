let numeros = []
let numeroInicial = 1

for (let i = 1; i <= 25; i += 1){
  numeroInicial = i;
  numeros.push(numeroInicial)
}

console.log(numeros)

console.log("------------------")

for(let i = 0; i < numeros.length; i +=1){
  console.log(numeros[i] / 2)
}