const fs = require('fs');
const sinon = require('sinon');
const {expect} = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe(`leArquivo`, () => {
  describe('Quando o arquivo existe', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('A resposta', () => {
     
      it('E uma string', () => {
        const resposta = leArquivo('arquivo.txt')
        expect(resposta).to.be.a(`string`)
      });

      it('E igual ao conteudo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt')
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO)
      });
    });
  });

  describe('Quando o arquivo nao existe', () => {
    
    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('Arquivo nao encontrado'))
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('A resposta', () => {
      
      it('E igual a "null" ', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');
        expect(resposta).to.be.equals(null);
      });

    });
  });

});