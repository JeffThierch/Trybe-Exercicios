const encode = (frase) => {
  let novaSting = '';
  let letrasTrocadas = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < frase.length; i += 1) {
    let letraAtual = frase[i];
    for (let key in letrasTrocadas) {
      if (key === letraAtual) {
        let novoNumero = letrasTrocadas[key];
        letraAtual = novoNumero;
        break;
      }
    }
    novaSting += letraAtual;
  }
  return novaSting;
}

const decode = (frase) => {
  let novaSting = '';
  let letrasTrocadas = { a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < frase.length; i += 1) {
    let letraAtual = frase[i];
    for (let key in letrasTrocadas) {
      if (letrasTrocadas[key] == letraAtual) {
        let novaLetra = key;
        letraAtual = novaLetra;
        break;
      }
    }
    novaSting += letraAtual;
  }
  return novaSting;
}

describe('Funcao Encode e Decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof(encode, decode)).toBe('function')
  })
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  })
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b, c, d, f')).toBe('b, c, d, f');
    expect(decode('6, 7, 8, 9')).toBe('6, 7, 8, 9');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const frase = 'aeiou'
    const numeros = '12345'
    expect(encode(frase)).toHaveLength(frase.length)
    expect(decode(numeros)).toHaveLength(numeros.length)
  })
})