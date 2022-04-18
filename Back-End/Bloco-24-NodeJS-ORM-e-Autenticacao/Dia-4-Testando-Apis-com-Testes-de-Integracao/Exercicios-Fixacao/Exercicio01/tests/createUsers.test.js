const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const server = require('../api/app');

const { User } = require('../models');

const { User: userMock }  = require('./mock/models')

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/users', () => {

  before(() => {
    sinon.stub(User, 'findAll')
        .callsFake(userMock.findAll);
  });

  after(() => {
    User.findAll.restore();
  });
  describe('Consulta a lista de pessoas usuárias', () => {
      let response;

      before(async () => {
          response = await chai
            .request(server)
            .get('/api/users');
      });

      it(
          'A requisição GET para a rota traz uma lista inicial ' +
          'contendo dois registros de pessoas usuárias',
          () => {
            expect(response.body).to.have.length(2);
          }
      );

      it('Essa requisição deve retornar código de status 200', () => {
          expect(response).to.have.status(200);
      });
  });
});