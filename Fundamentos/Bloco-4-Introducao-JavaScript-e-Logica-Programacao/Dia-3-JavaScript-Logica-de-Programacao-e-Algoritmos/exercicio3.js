let n = 5

let linhaVazia = ""

let asterisco = "*"

let posicaoLinha = n

for (let i = 0; i <= n; i += 1){
  for (let c = 0; c <= n; c += 1){
    if(c < posicaoLinha){
      linhaVazia = linhaVazia + " ";
    }
    else{
      linhaVazia = linhaVazia + asterisco
    }
  }
  console.log(linhaVazia)
  linhaVazia = "";
  posicaoLinha -= 1
}