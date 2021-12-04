const functions = require('./services')
const {generateRandonNumber, concatTwoStings, stringFistLetter, toUpperSting, fetchAPIDogsPictutes} = functions

describe('Testa a funcao GenerateRandonNumber', () => {
  test('Testa se o retorna da funcao esta correto', () => {
    const generateRandonNumber = jest.fn().mockReturnValue(10)
    expect(generateRandonNumber()).toBe(10)
  })
  test('Testa se a funcao foi chamada' , () => {
    const generateRandonNumber = jest.fn()
    generateRandonNumber()
    expect(generateRandonNumber).toHaveBeenCalled()
    expect(generateRandonNumber).toHaveBeenCalledTimes(1)
  })
})

describe('Com a funcao GenerateRandonNumber impelente a funcionalidade de dividir os numeros', () => {
  test('Testa se as funcionaliades novas estao corretas', () => {
    const generateRandonNumber = jest.fn().mockImplementationOnce((a,b) => a / b)
    expect(generateRandonNumber(4, 2)).toBe(2)
    expect(generateRandonNumber(4,2)).not.toBe(2)
    expect(generateRandonNumber).toHaveBeenCalled()
    expect(generateRandonNumber).toHaveBeenCalledTimes(2)
  })
})

describe('Com a funcao GenerateRandonNumber implemente a funcionalidade de Multiplicar 3 Numeros e Dobrar', () => {
  test('Testa se as funcionaliades novas estao corretas', () => {
    let generateRandonNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)

    expect(generateRandonNumber(2, 2, 2)).toBe(8)
    generateRandonNumber(1,2,3)
    expect(generateRandonNumber).toHaveBeenCalled()
    expect(generateRandonNumber).toHaveBeenCalledTimes(2)
    expect(generateRandonNumber).toHaveBeenCalledWith(1,2,3)

    generateRandonNumber.mockReset()

    generateRandonNumber = jest.fn().mockImplementation((number) => number * 2)

    expect(generateRandonNumber(2)).toBe(4)
    generateRandonNumber(2)
    expect(generateRandonNumber).toHaveBeenCalled()
    expect(generateRandonNumber).toHaveBeenCalledTimes(2)
    expect(generateRandonNumber).toHaveBeenCalledWith(2)

  })
})

describe('Testa os mocks criados para as novas funcoes dando-lhes novas funcionalidades ', () => {
  test('Testa se as funcionaliades novas estao corretas', () => {
    const toLowerSting = jest.spyOn(functions, 'toUpperSting').mockImplementation((string) => (string.toLowerCase()))
    const stringLastLetter = jest.spyOn(functions, 'stringFistLetter').mockImplementation((string) => (string[string.length - 1]))
    const concatThereeStings = jest.spyOn(functions, 'concatTwoStings').mockImplementation((stringA, stringB, stringC) => (stringA +stringB + stringC))

    expect(toLowerSting('TESTANDO')).toBe('testando')
    expect(toLowerSting).toHaveBeenCalled()
    expect(toLowerSting).toHaveBeenCalledWith('TESTANDO')
    expect(toLowerSting).toHaveBeenCalledTimes(1)

    expect(stringLastLetter('TESTANDO')).toBe('O')
    expect(stringLastLetter).toHaveBeenCalled()
    expect(stringLastLetter).toHaveBeenCalledWith('TESTANDO')
    expect(stringLastLetter).toHaveBeenCalledTimes(1)

    expect(concatThereeStings('A', 'B', 'C')).toBe('ABC')
    expect(concatThereeStings).toHaveBeenCalled()
    expect(concatThereeStings).toHaveBeenCalledWith('A', 'B', 'C')
    expect(concatThereeStings).toHaveBeenCalledTimes(1)

    /* Resetando os testes */
    toLowerSting.mockRestore()
    stringLastLetter.mockRestore()
    concatThereeStings.mockRestore()

    /* Testando funcionalidades Originais */

    expect(toUpperSting('testando')).toBe('TESTANDO')
    expect(stringFistLetter('TESTANDO')).toBe('T')
    expect(concatTwoStings('A', 'B')).toBe('AB')

  })

})
describe("testando a requisição", () => {
  fetchAPIDogsPictutes = jest.fn();
  afterEach(fetchAPIDogsPictutes.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    fetchAPIDogsPictutes.mockResolvedValue("request sucess");

    fetchAPIDogsPictutes();
    expect(fetchAPIDogsPictutes).toHaveBeenCalled();
    expect(fetchAPIDogsPictutes).toHaveBeenCalledTimes(1);
    await expect(fetchAPIDogsPictutes()).resolves.toBe("request sucess");
    expect(fetchAPIDogsPictutes).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    fetchAPIDogsPictutes.mockRejectedValue("request failed");

    expect(fetchAPIDogsPictutes).toHaveBeenCalledTimes(0);
    await expect(fetchAPIDogsPictutes()).rejects.toMatch("request failed");
    expect(fetchAPIDogsPictutes).toHaveBeenCalledTimes(1);
  });
});