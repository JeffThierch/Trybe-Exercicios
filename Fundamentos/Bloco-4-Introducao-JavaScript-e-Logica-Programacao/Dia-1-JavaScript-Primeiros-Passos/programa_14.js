

const custoProduto = 20
const valorVenda = 10;

const imposto = 20
const custoTotalProduto = custoProduto + (custoProduto * (imposto/100))
const lucroProduto = valorVenda - custoTotalProduto

let numeroVendas = 1000


if(custoProduto < 0 || valorVenda < 0){
  console.log("Insira um valor valido")
}
else{
  const lucroTotalProduto = lucroProduto * numeroVendas
  console.log("O lucro total sera de R$ " + lucroTotalProduto )
}