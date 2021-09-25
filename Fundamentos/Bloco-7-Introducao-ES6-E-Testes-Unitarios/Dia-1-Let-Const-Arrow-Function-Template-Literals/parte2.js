/* EXERCICIO 1 */

const fatorial = (numero) => {
 let controle = numero;

 for (let i = numero - 1; i > 0; i -= 1) {
  controle *= i
  }
  return (numero < 0) ? 'nao existe fatorial de numero negativo' : controle
}

console.log(fatorial(5))
