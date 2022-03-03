const {expect} = require('chai');
const sinon = require('sinon');

const verifyNumberValue = require('./verifyNumberValue');

describe('verifyNumberValue', () => {
  describe('Quando o numero for', () => {
    it('6 deve retornar "positivo" ', () => {

      const returnedValue = verifyNumberValue(6);

      expect(returnedValue).to.be.equals('positivo')
      
    });

    it('-2 deve retornar "negativo" ', () => {
      
      const returnedValue = verifyNumberValue(-2);

      expect(returnedValue).to.be.equals('negativo')

    });

    it('0 deve retornar "neutro" ', () => {

      const returnedValue = verifyNumberValue(0);

      expect(returnedValue).to.be.equals('neutro')

    });

  });
  
  describe('Caso nao seja um numero', () => {
    it('deve retornar a menssagem "informe apenas numeros" ', () => {
      const returnedValue = verifyNumberValue('xablau')
      
      expect(returnedValue).to.be.equals('informe apenas numeros')
    })
  })
});