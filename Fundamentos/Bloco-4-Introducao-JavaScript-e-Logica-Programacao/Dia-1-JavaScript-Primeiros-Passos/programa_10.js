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
  default:
    console.log("insira uma peca valida");
    break;
}