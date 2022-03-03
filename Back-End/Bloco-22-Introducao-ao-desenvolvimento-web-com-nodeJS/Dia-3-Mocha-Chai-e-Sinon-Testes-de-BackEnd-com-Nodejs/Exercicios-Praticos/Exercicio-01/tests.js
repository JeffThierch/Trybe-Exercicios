const {expect} = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const verifyNumberValue = require('./verifyNumberValue');
const writeAFile = require('./writeAFile')

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

describe('writeAFile', () => {

  const RETURN_VALUE = 'xablau'
  
  describe('Quando os parametros forem', () => {

    before(() => {
      sinon.stub(fs, 'writeFileSync').returns(RETURN_VALUE)
    })
  
    after(() => {
      fs.writeFileSync.restore()
    })

    it('"texto-01.txt" e "xablau", deve retornar "ok" ', () => {
      const returnedValue = writeAFile('texto-01.txt', 'xablau')

      expect(returnedValue).to.be.equals('ok')
    })

    it('A funcao do writeFileSync deve ter o retorno correto', () => {
      expect(fs.writeFileSync('test.txt', 'abc')).to.be.equals(RETURN_VALUE)
    })

  })

})