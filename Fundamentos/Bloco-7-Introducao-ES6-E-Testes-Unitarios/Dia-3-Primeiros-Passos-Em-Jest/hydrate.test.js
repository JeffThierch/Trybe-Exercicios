const hydrate = (str) => {
  let bebidas = str.split('');
  let numeroBebidas = [];
  let soma = 0;
  for (index of bebidas) {
    if(Number.parseInt(index, 10)) {
      numeroBebidas.push(Number.parseInt(index, 10))
    }
  }
  for (number of numeroBebidas) {
    soma += number
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});