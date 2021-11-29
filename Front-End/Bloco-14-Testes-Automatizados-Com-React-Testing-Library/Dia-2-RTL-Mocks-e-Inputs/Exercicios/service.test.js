const { it } = require('jest-circus')
const {generateRandonNumber} = require('./services')

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
  })
})