const { expect } = require('@jest/globals')
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