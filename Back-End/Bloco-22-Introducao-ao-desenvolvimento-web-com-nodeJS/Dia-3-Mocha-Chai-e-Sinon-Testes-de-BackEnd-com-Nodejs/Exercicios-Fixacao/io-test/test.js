const {expect} = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe(`leArquivo`, () => {
  describe('Quando o arquivo existe', () => {
    describe('A resposta', () => {
      const resposta = leArquivo('arquivo.txt')
      it('E uma string', () => {
        expect(resposta).to.be.a(`string`)
      })
      it('E igual ao conteudo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO)
      })
    })
  })
  describe('Quando o arquivo nao existe', () => {
    describe('A resposta', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt')
      it('E igual a "null" ', () => {
        expect(resposta).to.be.equals(null)
      })
    })
  })
})