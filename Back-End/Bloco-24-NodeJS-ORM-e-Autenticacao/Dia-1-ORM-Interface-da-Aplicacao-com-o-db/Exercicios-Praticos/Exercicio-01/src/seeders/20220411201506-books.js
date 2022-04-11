'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {

    await queryInterface.bulkInsert('Books', [
      {
        title: 'As 6 licoes',
        author: 'Mises',
        page_quantity: 100,
        created_at: new Date(Date.now()).toLocaleString('sv-SE'),
        updated_at: new Date(Date.now()).toLocaleString('sv-SE'),
      },
      {
        title: 'Man the economy and state',
        author: 'Rothbard',
        page_quantity: 300,
        created_at: new Date(Date.now()).toLocaleString('sv-SE'),
        updated_at: new Date(Date.now()).toLocaleString('sv-SE'),
      },
      {
        title: 'Acao humana',
        author: 'Mises',
        page_quantity: 800,
        created_at: new Date(Date.now()).toLocaleString('sv-SE'),
        updated_at: new Date(Date.now()).toLocaleString('sv-SE'),
      },
      {
        title: 'Democracria o Deus que falhou',
        author: 'Hans',
        created_at: new Date(Date.now()).toLocaleString('sv-SE'),
        updated_at: new Date(Date.now()).toLocaleString('sv-SE'),
      }
    ], {})
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
