const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo seu "id"', () => {
  describe('Quando encontrado', () => {

    before(() => {
      const FILM_MODEL = {
        id: 1, 
        title: 'Laranja mecanica',
        directedBy: 'Stanley Kubrick',
        releaseYear: 1972,
      }

      sinon.stub(MoviesModel, 'getById').returns(FILM_MODEL)
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('Retorna um "obj"', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.be.a('object')
    })

    it('Esse objeto tem que possuir a propriedade "id" e ela tem q ter o valor "1"', 
    async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.haveOwnProperty('id')
      expect(response.id).to.be.equal(1);
    })
  })

  describe('Quando nao encontrado', () => {

    before(() => {

      sinon.stub(MoviesModel, 'getById').returns(null)
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('Deve retornar um objeto de erro', async () => {
      const response = await MoviesService.getById(99);

      expect(response).to.haveOwnProperty('error')
    })

    it('Esse objeto de erro tem q conter a propriedade "code" e "message"', async () => {
      const response = await MoviesService.getById(99);

      expect(response.error).to.haveOwnProperty('code')
      expect(response.error).to.haveOwnProperty('message')
    })

    it('A propriedade "code" deve ser igual a "404" e "message" igual a "Filme não encontrado."', 
    async () => {
      const {error} = await MoviesService.getById(99);

      expect(error.code).to.be.equal(404)
      expect(error.message).to.be.equal('Filme não encontrado.')
    })

  })
})