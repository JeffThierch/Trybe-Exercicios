const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function converdorDeNumerosRomanos(numero){
  numero = numero.toLowerCase();
  let soma = numerosRomanos[numero[numero.length - 1]];
  let atual = numerosRomanos[numero[numero.length - 1]];

  for(let index = 2; index <= numero.length; index += 1){
    const prox = numerosRomanos[numero[numero.length - index]];
    if(atual <= prox){
      soma += prox;
    }
    else{
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(converdorDeNumerosRomanos("XX"))