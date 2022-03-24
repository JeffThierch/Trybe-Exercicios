const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Busca um filme pelo seu ID', () => {
  describe('Quando encontrado', () => {

    before(() => {
      const execute = [{
        id: 1, 
        title: 'Laranja mecanica',
        directedBy: 'Stanley Kubrick',
        releaseYear: 1972,
      }]

      sinon.stub(connection, 'execute').resolves(execute);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const response = MoviesModel.getById(1);

      expect(response).to.be.a('array');
    })

  });

  describe('Quando nao encontrado', () => {
    before(() => {
      const execute = []

      sinon.stub(connection, 'execute').resolves(execute);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array vazio', async () => {
      const response = await MoviesModel.getById(99);

      expect(response).to.have.length(0);
    })
  });
})