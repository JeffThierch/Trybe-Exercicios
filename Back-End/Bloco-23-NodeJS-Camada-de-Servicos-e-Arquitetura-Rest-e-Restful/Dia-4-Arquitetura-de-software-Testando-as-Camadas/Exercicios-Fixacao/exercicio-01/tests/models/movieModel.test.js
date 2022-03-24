const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../src/models/movieModel');
const connection = require('../../src/models/connection');
 describe('Insere um novo filme no BD', () => {
   const payloadMovie = {
   title: 'Example Movie',
   directedBy: 'Jane Dow',
   releaseYear: 1999,
 };
  
   describe('quando é inserido com sucesso', () => {

    before(async () => {
      const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

      sinon.stub(connection, 'execute').resolves(execute);
    });

    // Restauraremos a função `execute` original após os testes.
    after(async () => {
      connection.execute.restore();
    });

     it('retorna um objeto', async () => {
       const response = await MoviesModel.create(payloadMovie);

       expect(response).to.be.a('object');
       });

       it('tal objeto possui o "id" do novo filme inserido', async () => {
       const response = await MoviesModel.create(payloadMovie);

       expect(response).to.have.a.property('id');
     });

   });
 });