'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Books', [
      {
        title: 'As 6 licoes',
        author: 'Mises',
        pageQuantity: 100
      },
      {
        title: 'Man the economy and state',
        author: 'Rothbard',
        pageQuantity: 300
      },
      {
        title: 'Acao humana',
        author: 'Mises',
        pageQuantity: 800
      },
      {
        title: 'Democracria o Deus que falhou',
        author: 'Hans',
      }
    ], {})
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
